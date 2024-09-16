varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vPosition;
uniform sampler2D day;
uniform sampler2D night;
uniform sampler2D clouds;
uniform vec3 uAtmosphereDayColor;
uniform vec3 uAtmosphereTwilight;


void main()
{
    vec3 viewDirection = normalize(vPosition - cameraPosition);
    vec3 normal = normalize(vNormal);
    vec3 color = vec3(0.0);

     // sun direction
    vec3 uSunDirection = vec3(0.0, 0.0, 1.0);
    float sunOrientation = dot(uSunDirection, normal);
   
    

    //day and night texture
    float dayMix = smoothstep(-0.25, 0.5, sunOrientation);
    vec3 dayColor = texture(day, vUv).rgb;
    vec3 nightColor = texture(night, vUv).rgb;
    color = mix(nightColor, dayColor, dayMix);

    // clouds
    vec2 specularClouds = texture(clouds, vUv).rg;
    
    float cloudsMix = smoothstep(0.5, 1.0, specularClouds.g);
    color = mix(color, vec3(1.0), cloudsMix);

    // fresnel
    float fresnel = dot(viewDirection, normal) + 1.0;
    fresnel = pow(fresnel, 2.0);
   

   
   // atmosphere
   float atmosphereDayMix = smoothstep(-0.5, 1.0, sunOrientation);
   vec3 atmosphereColor = mix(uAtmosphereTwilight, uAtmosphereDayColor, atmosphereDayMix);
   color = mix(color, atmosphereColor, fresnel * atmosphereDayMix);

   // specular
   vec3 reflection = reflect(-uSunDirection, normal);
   float specular = - dot(reflection, viewDirection);
   specular = max(specular, 0.0);
   specular = pow(specular, 32.0);
   specular *= specularClouds.r;
 
  vec3 specularColor = mix(vec3(1.0), atmosphereColor, fresnel);
  color += specular * specularColor;


   color += specular;


    // Final color
    gl_FragColor = vec4(color, 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
}