varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vPosition;
uniform sampler2D day;
uniform sampler2D night;


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

   

    // Final color
    gl_FragColor = vec4(color, 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
}