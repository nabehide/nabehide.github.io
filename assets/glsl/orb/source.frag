#ifdef GL_ES
precision mediump float;
#define GLSLIFY 1
#endif

uniform float time;
uniform vec2  resolution;

uniform sampler2D tAudioData;
uniform float mousex;
uniform float mousey;

uniform int   isColorInverted;
uniform int   isGlitched;
uniform float glitch;
uniform float zoom;

const float PI = 3.14159265358979;

const float c1 = 0.8;
const float c2 = 0.11;
const float c3 = 0.49;
const float speed = 1.5;

const vec2 offsetCenter = vec2(-0.5, 0.1);
const float offsetZoom = 0.5;

const float lineWidth = 0.8;
const float senseAudio = 0.2;

float rand(vec2 co){
  return fract(sin(dot(co, vec2(12.9898, 78.233))) * 43758.5453);
}

mat2 rot(float t){
    return mat2(cos(t), -sin(t), sin(t), cos(t));
}

float line(vec2 p, float w){
    // return (1.0 - step(w, abs(p.y)));
    return (1.0 - smoothstep(0.0, w, abs(p.y)));
    // return smoothstep(w, -w, abs(p.y));
}

void main(void){
    vec2 p = (gl_FragCoord.xy * 2.0 - resolution) / min(resolution.x, resolution.y);
    p -= offsetCenter;

    float dx, dy;
    float a = 1.5;
    if (mousex < 0.5) {
      dx =  pow(0.5-mousex, a);
    } else {
      dx = -pow(0.5-mousex, a);
    }
    if (mousey < 0.5) {
      dy = -pow(0.5-mousey, a);
    } else {
      dy =  pow(0.5-mousey, a);
    }
    p -= vec2(dx, dy);

    vec3 draw = vec3(0.0);

    float period = 5.0;
    float t = mod(time * speed, period);

    if(isGlitched == 1){
      for(int i=0; i<5; i++){
        float r1 = rand(vec2(t+0.0, float(i)))*2.-1.;
        float r2 = rand(vec2(t+0.1, float(i)))*2.-1.;
        float intensity = rand(vec2(t+0.2, float(i)))*glitch/255.;
        if(min(r1, r2)<p.y && p.y<max(r1, r2)){
          p.x += intensity;
        }
      }
    }

    p *= (zoom + offsetZoom);

    float f = texture2D(tAudioData, p/256.0).r;
    f = lineWidth - f*senseAudio;
    
    for (int i=0; i<3; i++) {
	    float b = (t + float(i) * period / 3.0) * PI * 0.4;
      float s = sin(b);
      float ss = s * 1.0 - 0.5;

      vec2 pos = vec2(p.x*cos(b+1.0)/2.0, p.y*(sin(b+1.0)/2.0));
      pos *= rot(ss * length(p-vec2(s, cos(b))));
      pos *= rot(0.5 * PI);

      vec3 color;
      if (i == 0) {
      	color = vec3(c1, c2, c3);
      } else if (i==1) {
      	color = vec3(c2, c3, c1);
      } else {
      	color = vec3(c3, c1, c2);
      }
      draw += line(pos, f) * color;
    }
    
    if(isColorInverted != 0){
      draw = 1.0 - draw;
    }
    
    gl_FragColor = vec4(draw,1.0);
}
