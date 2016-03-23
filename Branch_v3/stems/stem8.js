synth8 = new Tone.PolySynth(3, Tone.SimpleSynth, {
                "oscillator": {
                    "type": "sine",
                    "count": 3,
                    "spread": 30
                },
                "envelope": {
                    "attack": 0.01,
                    "decay": 0.1,
                    "sustain": 0.5,
                    "release": 0.4,
                    "attackCurve": "exponential"
                },
            })

          


            
var stem8 = new Tone.Part(function(time, note){
      synth8.triggerAttackRelease(note.noteName, note.duration, time, note.velocity);
    }, [
    // {
//   "08 - soft square lead": [
    {
      "time": "2880i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "2880i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "2916i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "2916i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "2952i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "2952i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "2988i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "2988i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "3024i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "3024i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9448818897637795,
      "duration": "13i"
    },
    {
      "time": "3048i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "3048i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "3072i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "3072i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "3108i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "3108i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "3144i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "3144i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "3180i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "3180i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "3216i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "3216i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9448818897637795,
      "duration": "13i"
    },
    {
      "time": "3240i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "3240i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "3264i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "3264i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "3300i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "3300i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "3336i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "3336i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "3372i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "3372i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "3408i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "3408i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9448818897637795,
      "duration": "13i"
    },
    {
      "time": "3432i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "3432i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "3456i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "3456i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "3492i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "3492i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "3528i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "3528i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "3564i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "3564i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "3600i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9448818897637795,
      "duration": "13i"
    },
    {
      "time": "3600i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "3624i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "3624i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "3648i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "3648i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "3684i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "3684i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "3720i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "3720i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "3756i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "3756i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "3792i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "3792i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9448818897637795,
      "duration": "13i"
    },
    {
      "time": "3816i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "3816i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "3840i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "3840i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "3876i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "3876i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "3912i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "3912i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "3948i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "3948i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "3984i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "3984i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9448818897637795,
      "duration": "13i"
    },
    {
      "time": "4008i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "4008i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "4032i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "4032i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "4068i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "4068i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "4104i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "4104i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "4140i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "4140i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "4176i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9448818897637795,
      "duration": "13i"
    },
    {
      "time": "4176i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "4200i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "4200i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "4224i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "4224i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "4260i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "4260i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "4296i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "4296i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "4332i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "4332i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "4368i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "4368i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9448818897637795,
      "duration": "13i"
    },
    {
      "time": "4392i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "4392i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "4416i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "4416i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "4452i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "4452i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "4488i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "4488i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "4524i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "4524i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "4560i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9448818897637795,
      "duration": "14i"
    },
    {
      "time": "4560i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "4584i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "4584i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "4608i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "4608i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "4644i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "4644i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "4680i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "4680i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "4716i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "4716i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "4752i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9448818897637795,
      "duration": "13i"
    },
    {
      "time": "4752i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "4776i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "4776i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "4800i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "4800i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "4836i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "4836i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "4872i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "4872i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "4908i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "4908i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "4944i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9448818897637795,
      "duration": "13i"
    },
    {
      "time": "4944i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "4968i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "4968i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "4992i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "4992i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "5028i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "5028i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "5064i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "5064i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "5100i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "5100i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "5136i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "5136i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9448818897637795,
      "duration": "13i"
    },
    {
      "time": "5160i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "5160i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "5184i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "5184i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "5220i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "5220i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "5256i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "5256i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "5292i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "5292i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "5328i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "5328i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9448818897637795,
      "duration": "13i"
    },
    {
      "time": "5352i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "5352i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "5376i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "5376i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "5412i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "5412i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "5448i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "5448i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "5484i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "5484i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "5520i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "5520i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9448818897637795,
      "duration": "14i"
    },
    {
      "time": "5544i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "5544i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "5568i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "5568i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "5604i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "5604i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "5640i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "5640i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "5676i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "5676i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "5712i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "5712i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9448818897637795,
      "duration": "14i"
    },
    {
      "time": "5736i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "5736i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "5760i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "5760i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "5796i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "5796i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "5832i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "5832i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "5868i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "5868i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "5904i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "5904i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9448818897637795,
      "duration": "13i"
    },
    {
      "time": "5928i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "5928i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "7488i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "7488i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "7524i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "7524i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "7560i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "7560i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "7596i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "7596i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "7632i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9448818897637795,
      "duration": "14i"
    },
    {
      "time": "7632i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "7656i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "7656i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "7680i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "7680i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "7716i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "7716i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "7752i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "7752i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "7788i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "7788i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "7824i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9448818897637795,
      "duration": "13i"
    },
    {
      "time": "7824i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "7848i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "7848i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "7872i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "7872i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "7908i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "7908i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "7944i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "7944i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "7980i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "7980i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "8016i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "8016i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9448818897637795,
      "duration": "14i"
    },
    {
      "time": "8040i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "8040i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "8064i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "8064i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "8100i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "8100i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "8136i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "8136i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "8172i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "8172i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "8208i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9448818897637795,
      "duration": "14i"
    },
    {
      "time": "8208i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "8232i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "8232i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "8256i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "8256i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "8292i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "8292i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "8328i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "8328i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "8364i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "8364i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "8400i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "8400i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9448818897637795,
      "duration": "13i"
    },
    {
      "time": "8424i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "8424i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "8448i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "8448i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "8484i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "8484i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "8520i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "8520i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "8556i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "8556i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "8592i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "8592i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9448818897637795,
      "duration": "14i"
    },
    {
      "time": "8616i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "8616i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "8640i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "8640i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "8676i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "8676i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "8712i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "8712i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "8748i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "8748i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "8784i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9448818897637795,
      "duration": "13i"
    },
    {
      "time": "8784i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "8808i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "8808i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "8832i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "8832i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "8868i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "8868i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "8904i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "8904i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "8940i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "8940i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "8976i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "8976i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9448818897637795,
      "duration": "13i"
    },
    {
      "time": "9000i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "9000i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "9024i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "9060i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "9096i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "9132i",
      "midiNote": 59,
      "noteName": "B3",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "9168i",
      "midiNote": 59,
      "noteName": "B3",
      "velocity": 0.9448818897637795,
      "duration": "13i"
    },
    {
      "time": "9192i",
      "midiNote": 59,
      "noteName": "B3",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "9216i",
      "midiNote": 54,
      "noteName": "F#3",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "9252i",
      "midiNote": 54,
      "noteName": "F#3",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "9288i",
      "midiNote": 54,
      "noteName": "F#3",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "9324i",
      "midiNote": 56,
      "noteName": "G#3",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "9360i",
      "midiNote": 56,
      "noteName": "G#3",
      "velocity": 0.9448818897637795,
      "duration": "14i"
    },
    {
      "time": "9384i",
      "midiNote": 56,
      "noteName": "G#3",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "9408i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "9444i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "9480i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "9516i",
      "midiNote": 59,
      "noteName": "B3",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "9552i",
      "midiNote": 59,
      "noteName": "B3",
      "velocity": 0.9448818897637795,
      "duration": "14i"
    },
    {
      "time": "9576i",
      "midiNote": 59,
      "noteName": "B3",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "9600i",
      "midiNote": 54,
      "noteName": "F#3",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "9636i",
      "midiNote": 54,
      "noteName": "F#3",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "9672i",
      "midiNote": 54,
      "noteName": "F#3",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "9708i",
      "midiNote": 56,
      "noteName": "G#3",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "9744i",
      "midiNote": 56,
      "noteName": "G#3",
      "velocity": 0.9448818897637795,
      "duration": "13i"
    },
    {
      "time": "9768i",
      "midiNote": 56,
      "noteName": "G#3",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "9792i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "9828i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "9864i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "9900i",
      "midiNote": 59,
      "noteName": "B3",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "9936i",
      "midiNote": 59,
      "noteName": "B3",
      "velocity": 0.9448818897637795,
      "duration": "13i"
    },
    {
      "time": "9960i",
      "midiNote": 59,
      "noteName": "B3",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "9984i",
      "midiNote": 54,
      "noteName": "F#3",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "10020i",
      "midiNote": 54,
      "noteName": "F#3",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "10056i",
      "midiNote": 54,
      "noteName": "F#3",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "10092i",
      "midiNote": 56,
      "noteName": "G#3",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "10128i",
      "midiNote": 56,
      "noteName": "G#3",
      "velocity": 0.9448818897637795,
      "duration": "14i"
    },
    {
      "time": "10152i",
      "midiNote": 56,
      "noteName": "G#3",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "10176i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "10212i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "10248i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "10284i",
      "midiNote": 59,
      "noteName": "B3",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "10320i",
      "midiNote": 59,
      "noteName": "B3",
      "velocity": 0.9448818897637795,
      "duration": "13i"
    },
    {
      "time": "10344i",
      "midiNote": 59,
      "noteName": "B3",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "10368i",
      "midiNote": 54,
      "noteName": "F#3",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "10404i",
      "midiNote": 54,
      "noteName": "F#3",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "10440i",
      "midiNote": 54,
      "noteName": "F#3",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "10476i",
      "midiNote": 56,
      "noteName": "G#3",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "10512i",
      "midiNote": 56,
      "noteName": "G#3",
      "velocity": 0.9448818897637795,
      "duration": "13i"
    },
    {
      "time": "10536i",
      "midiNote": 56,
      "noteName": "G#3",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "10560i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "10596i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "10632i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "10668i",
      "midiNote": 59,
      "noteName": "B3",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "10704i",
      "midiNote": 59,
      "noteName": "B3",
      "velocity": 0.9448818897637795,
      "duration": "13i"
    },
    {
      "time": "10728i",
      "midiNote": 59,
      "noteName": "B3",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "10752i",
      "midiNote": 54,
      "noteName": "F#3",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "10788i",
      "midiNote": 54,
      "noteName": "F#3",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "10824i",
      "midiNote": 54,
      "noteName": "F#3",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "10860i",
      "midiNote": 56,
      "noteName": "G#3",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "10896i",
      "midiNote": 56,
      "noteName": "G#3",
      "velocity": 0.9448818897637795,
      "duration": "14i"
    },
    {
      "time": "10920i",
      "midiNote": 56,
      "noteName": "G#3",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "10944i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "10980i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "11016i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "11052i",
      "midiNote": 59,
      "noteName": "B3",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "11088i",
      "midiNote": 59,
      "noteName": "B3",
      "velocity": 0.9448818897637795,
      "duration": "14i"
    },
    {
      "time": "11112i",
      "midiNote": 59,
      "noteName": "B3",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "11136i",
      "midiNote": 54,
      "noteName": "F#3",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "11172i",
      "midiNote": 54,
      "noteName": "F#3",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "11208i",
      "midiNote": 54,
      "noteName": "F#3",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "11244i",
      "midiNote": 56,
      "noteName": "G#3",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "11280i",
      "midiNote": 56,
      "noteName": "G#3",
      "velocity": 0.9448818897637795,
      "duration": "13i"
    },
    {
      "time": "11304i",
      "midiNote": 56,
      "noteName": "G#3",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "11328i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "11364i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "11400i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "11436i",
      "midiNote": 59,
      "noteName": "B3",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "11472i",
      "midiNote": 59,
      "noteName": "B3",
      "velocity": 0.9448818897637795,
      "duration": "13i"
    },
    {
      "time": "11496i",
      "midiNote": 59,
      "noteName": "B3",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "11520i",
      "midiNote": 54,
      "noteName": "F#3",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "11556i",
      "midiNote": 54,
      "noteName": "F#3",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "11592i",
      "midiNote": 54,
      "noteName": "F#3",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "11628i",
      "midiNote": 56,
      "noteName": "G#3",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "11664i",
      "midiNote": 56,
      "noteName": "G#3",
      "velocity": 0.9448818897637795,
      "duration": "14i"
    },
    {
      "time": "11688i",
      "midiNote": 56,
      "noteName": "G#3",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "11712i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "11748i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "11784i",
      "midiNote": 63,
      "noteName": "D#4",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "11820i",
      "midiNote": 59,
      "noteName": "B3",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "11856i",
      "midiNote": 59,
      "noteName": "B3",
      "velocity": 0.9448818897637795,
      "duration": "13i"
    },
    {
      "time": "11880i",
      "midiNote": 59,
      "noteName": "B3",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "11904i",
      "midiNote": 54,
      "noteName": "F#3",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "11940i",
      "midiNote": 54,
      "noteName": "F#3",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "11976i",
      "midiNote": 54,
      "noteName": "F#3",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "12012i",
      "midiNote": 56,
      "noteName": "G#3",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "12048i",
      "midiNote": 56,
      "noteName": "G#3",
      "velocity": 0.9448818897637795,
      "duration": "14i"
    },
    {
      "time": "12072i",
      "midiNote": 56,
      "noteName": "G#3",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "12096i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "12096i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "12132i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "12132i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "12168i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "12168i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "12204i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "12204i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "12240i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9448818897637795,
      "duration": "13i"
    },
    {
      "time": "12240i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "12264i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "12264i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "12288i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "12288i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "12324i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "12324i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "12360i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "12360i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "12396i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "12396i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "12432i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "12432i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9448818897637795,
      "duration": "14i"
    },
    {
      "time": "12456i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "12456i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "12480i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "12480i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "12516i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "12516i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "12552i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "12552i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "12588i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "12588i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "12624i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "12624i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9448818897637795,
      "duration": "13i"
    },
    {
      "time": "12648i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "12648i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "12672i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "12672i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "12708i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "12708i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "12744i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "12744i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "12780i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "12780i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "12816i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "12816i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9448818897637795,
      "duration": "14i"
    },
    {
      "time": "12840i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "12840i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "12864i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "12864i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "12900i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "12900i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "12936i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "12936i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "12972i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "12972i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "13008i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9448818897637795,
      "duration": "14i"
    },
    {
      "time": "13008i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "13032i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "13032i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "13056i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "13056i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "13092i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "13092i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "13128i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "13128i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "13164i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "13164i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "13200i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "13200i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9448818897637795,
      "duration": "13i"
    },
    {
      "time": "13224i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "13224i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "13248i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "13248i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "13284i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "13284i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "13320i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "13320i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "13356i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "13356i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "13392i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "13392i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9448818897637795,
      "duration": "13i"
    },
    {
      "time": "13416i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "13416i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "13440i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "13440i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "13476i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "13476i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "13512i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "13512i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "13548i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "13548i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "13584i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "13584i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9448818897637795,
      "duration": "13i"
    },
    {
      "time": "13608i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "13608i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "13632i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.7165354330708661,
      "duration": "9i"
    },
    {
      "time": "13668i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.6850393700787402,
      "duration": "9i"
    },
    {
      "time": "13704i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.7165354330708661,
      "duration": "8i"
    },
    {
      "time": "13740i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.7007874015748031,
      "duration": "9i"
    },
    {
      "time": "13776i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.7086614173228346,
      "duration": "9i"
    },
    {
      "time": "13800i",
      "midiNote": 71,
      "noteName": "B4",
      "velocity": 0.5669291338582677,
      "duration": "8i"
    },
    {
      "time": "13824i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.7165354330708661,
      "duration": "9i"
    },
    {
      "time": "13860i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.6929133858267716,
      "duration": "9i"
    },
    {
      "time": "13896i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.6850393700787402,
      "duration": "9i"
    },
    {
      "time": "13932i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.6614173228346457,
      "duration": "8i"
    },
    {
      "time": "13968i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.7480314960629921,
      "duration": "9i"
    },
    {
      "time": "13992i",
      "midiNote": 71,
      "noteName": "B4",
      "velocity": 0.6220472440944882,
      "duration": "8i"
    },
    {
      "time": "14016i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.7637795275590551,
      "duration": "9i"
    },
    {
      "time": "14052i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.7244094488188977,
      "duration": "8i"
    },
    {
      "time": "14088i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.7480314960629921,
      "duration": "9i"
    },
    {
      "time": "14124i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.7480314960629921,
      "duration": "9i"
    },
    {
      "time": "14160i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.7716535433070866,
      "duration": "8i"
    },
    {
      "time": "14184i",
      "midiNote": 71,
      "noteName": "B4",
      "velocity": 0.6614173228346457,
      "duration": "9i"
    },
    {
      "time": "14208i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.7401574803149606,
      "duration": "8i"
    },
    {
      "time": "14244i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.7559055118110236,
      "duration": "9i"
    },
    {
      "time": "14280i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.7559055118110236,
      "duration": "8i"
    },
    {
      "time": "14316i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.7086614173228346,
      "duration": "8i"
    },
    {
      "time": "14352i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.7716535433070866,
      "duration": "8i"
    },
    {
      "time": "14376i",
      "midiNote": 71,
      "noteName": "B4",
      "velocity": 0.7086614173228346,
      "duration": "8i"
    },
    {
      "time": "14400i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.7165354330708661,
      "duration": "9i"
    },
    {
      "time": "14436i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.6850393700787402,
      "duration": "9i"
    },
    {
      "time": "14472i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.7165354330708661,
      "duration": "8i"
    },
    {
      "time": "14508i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.7007874015748031,
      "duration": "9i"
    },
    {
      "time": "14544i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.7086614173228346,
      "duration": "9i"
    },
    {
      "time": "14568i",
      "midiNote": 71,
      "noteName": "B4",
      "velocity": 0.5669291338582677,
      "duration": "8i"
    },
    {
      "time": "14592i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.7165354330708661,
      "duration": "9i"
    },
    {
      "time": "14628i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.6929133858267716,
      "duration": "9i"
    },
    {
      "time": "14664i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.6850393700787402,
      "duration": "9i"
    },
    {
      "time": "14700i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.6614173228346457,
      "duration": "8i"
    },
    {
      "time": "14736i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.7480314960629921,
      "duration": "9i"
    },
    {
      "time": "14760i",
      "midiNote": 71,
      "noteName": "B4",
      "velocity": 0.6220472440944882,
      "duration": "8i"
    },
    {
      "time": "14784i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.7637795275590551,
      "duration": "9i"
    },
    {
      "time": "14820i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.7244094488188977,
      "duration": "8i"
    },
    {
      "time": "14856i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.7480314960629921,
      "duration": "9i"
    },
    {
      "time": "14892i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.7480314960629921,
      "duration": "8i"
    },
    {
      "time": "14928i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.7716535433070866,
      "duration": "8i"
    },
    {
      "time": "14952i",
      "midiNote": 71,
      "noteName": "B4",
      "velocity": 0.6614173228346457,
      "duration": "9i"
    },
    {
      "time": "14976i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.7401574803149606,
      "duration": "8i"
    },
    {
      "time": "15012i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.7559055118110236,
      "duration": "9i"
    },
    {
      "time": "15048i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.7559055118110236,
      "duration": "8i"
    },
    {
      "time": "15084i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.7086614173228346,
      "duration": "8i"
    },
    {
      "time": "15120i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.7716535433070866,
      "duration": "8i"
    },
    {
      "time": "15144i",
      "midiNote": 71,
      "noteName": "B4",
      "velocity": 0.7086614173228346,
      "duration": "8i"
    },
    {
      "time": "15168i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.7165354330708661,
      "duration": "9i"
    },
    {
      "time": "15204i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.6850393700787402,
      "duration": "9i"
    },
    {
      "time": "15240i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.7165354330708661,
      "duration": "8i"
    },
    {
      "time": "15276i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.7007874015748031,
      "duration": "9i"
    },
    {
      "time": "15312i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.7086614173228346,
      "duration": "9i"
    },
    {
      "time": "15336i",
      "midiNote": 71,
      "noteName": "B4",
      "velocity": 0.5669291338582677,
      "duration": "8i"
    },
    {
      "time": "15360i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.7165354330708661,
      "duration": "9i"
    },
    {
      "time": "15396i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.6929133858267716,
      "duration": "9i"
    },
    {
      "time": "15432i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.6850393700787402,
      "duration": "9i"
    },
    {
      "time": "15468i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.6614173228346457,
      "duration": "8i"
    },
    {
      "time": "15504i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.7480314960629921,
      "duration": "9i"
    },
    {
      "time": "15528i",
      "midiNote": 71,
      "noteName": "B4",
      "velocity": 0.6220472440944882,
      "duration": "8i"
    },
    {
      "time": "15552i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.7637795275590551,
      "duration": "9i"
    },
    {
      "time": "15588i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.7244094488188977,
      "duration": "8i"
    },
    {
      "time": "15624i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.7480314960629921,
      "duration": "9i"
    },
    {
      "time": "15660i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.7480314960629921,
      "duration": "8i"
    },
    {
      "time": "15696i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.7716535433070866,
      "duration": "8i"
    },
    {
      "time": "15720i",
      "midiNote": 71,
      "noteName": "B4",
      "velocity": 0.6614173228346457,
      "duration": "9i"
    },
    {
      "time": "15744i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.7401574803149606,
      "duration": "8i"
    },
    {
      "time": "15780i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.7559055118110236,
      "duration": "9i"
    },
    {
      "time": "15816i",
      "midiNote": 75,
      "noteName": "D#5",
      "velocity": 0.7559055118110236,
      "duration": "8i"
    },
    {
      "time": "15852i",
      "midiNote": 75,
      "noteName": "D#5",
      "velocity": 0.7086614173228346,
      "duration": "8i"
    },
    {
      "time": "15888i",
      "midiNote": 78,
      "noteName": "F#5",
      "velocity": 0.7716535433070866,
      "duration": "8i"
    },
    {
      "time": "15912i",
      "midiNote": 80,
      "noteName": "G#5",
      "velocity": 0.7086614173228346,
      "duration": "8i"
    },
    {
      "time": "15936i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "15936i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "15972i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "15972i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "16008i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "16008i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "16044i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "16044i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "16080i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9448818897637795,
      "duration": "13i"
    },
    {
      "time": "16080i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "16104i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "16104i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "16128i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "16128i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "16164i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "16164i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "16200i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "16200i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "16236i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "16236i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "16272i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "16272i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9448818897637795,
      "duration": "13i"
    },
    {
      "time": "16296i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "16296i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "16320i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "16320i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "16356i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "16356i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "16392i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "16392i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "16428i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "16428i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "16464i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "16464i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9448818897637795,
      "duration": "13i"
    },
    {
      "time": "16488i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "16488i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "16512i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "16512i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "16548i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "16548i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "16584i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "16584i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "16620i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "16620i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "16656i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "16656i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9448818897637795,
      "duration": "13i"
    },
    {
      "time": "16680i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "16680i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "16704i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "16704i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "16740i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "16740i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "16776i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "16776i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "16812i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "16812i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "16848i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9448818897637795,
      "duration": "13i"
    },
    {
      "time": "16848i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "16872i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "16872i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "16896i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "16896i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "16932i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "16932i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "16968i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "16968i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "17004i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "17004i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "17040i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "17040i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9448818897637795,
      "duration": "13i"
    },
    {
      "time": "17064i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "17064i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "17088i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "17088i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "17124i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "17124i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "17160i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "17160i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "17196i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "17196i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "17232i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9448818897637795,
      "duration": "13i"
    },
    {
      "time": "17232i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "17256i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "17256i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "17280i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "17280i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "17316i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "17316i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "17352i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "17352i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "17388i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "17388i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "17424i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9448818897637795,
      "duration": "13i"
    },
    {
      "time": "17424i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "17448i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "17448i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "19008i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "19008i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "19044i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "19044i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "19080i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "19080i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "19116i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "19116i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "19152i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "19152i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9448818897637795,
      "duration": "14i"
    },
    {
      "time": "19176i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "19176i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "19200i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "19200i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "19236i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "19236i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "19272i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "19272i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "19308i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "19308i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "19344i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9448818897637795,
      "duration": "14i"
    },
    {
      "time": "19344i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "19368i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "19368i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "19392i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "19392i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "19428i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "19428i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "19464i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "19464i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "19500i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "19500i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "19536i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "19536i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9448818897637795,
      "duration": "13i"
    },
    {
      "time": "19560i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "19560i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "19584i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "19584i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "19620i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "19620i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "19656i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "19656i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "19692i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "19692i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "19728i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9448818897637795,
      "duration": "13i"
    },
    {
      "time": "19728i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "19752i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "19752i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "19776i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "19776i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "19812i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "19812i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "19848i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "19848i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "19884i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "19884i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "19920i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "19920i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9448818897637795,
      "duration": "14i"
    },
    {
      "time": "19944i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "19944i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "19968i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "19968i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "20004i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "20004i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "20040i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "20040i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "20076i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "20076i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "20112i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "20112i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9448818897637795,
      "duration": "14i"
    },
    {
      "time": "20136i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "20136i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "20160i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "20160i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "20196i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "20196i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "20232i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "20232i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "20268i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "20268i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "20304i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9448818897637795,
      "duration": "13i"
    },
    {
      "time": "20304i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "20328i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "20328i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "20352i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "20352i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "20388i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "20388i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "20424i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "20424i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "20460i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "20460i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "20496i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9448818897637795,
      "duration": "13i"
    },
    {
      "time": "20496i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "20520i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "20520i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "20544i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "20544i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "20580i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "20580i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "20616i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "20616i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "20652i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "20652i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "20688i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9448818897637795,
      "duration": "13i"
    },
    {
      "time": "20688i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "20712i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "20712i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "20736i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "20736i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "20772i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "20772i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "20808i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "20808i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "20844i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "20844i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "20880i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "20880i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9448818897637795,
      "duration": "13i"
    },
    {
      "time": "20904i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "20904i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "20928i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "20928i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "20964i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "20964i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "21000i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "21000i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "21036i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "21036i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "21072i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "21072i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9448818897637795,
      "duration": "13i"
    },
    {
      "time": "21096i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "21096i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "21120i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "21120i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "21156i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "21156i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "21192i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "21192i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "21228i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "21228i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "21264i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "21264i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9448818897637795,
      "duration": "13i"
    },
    {
      "time": "21288i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "21288i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "21312i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "21312i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "21348i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "21348i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "21384i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "21384i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "21420i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "21420i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "21456i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9448818897637795,
      "duration": "13i"
    },
    {
      "time": "21456i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "21480i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "21480i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "21504i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "21504i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "21540i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "21540i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "21576i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "21576i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "21612i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "21612i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "21648i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9448818897637795,
      "duration": "13i"
    },
    {
      "time": "21648i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "21672i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "21672i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "21696i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "21696i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "21732i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "21732i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "21768i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "21768i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "21804i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "21804i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "21840i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "21840i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9448818897637795,
      "duration": "13i"
    },
    {
      "time": "21864i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "21864i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    },
    {
      "time": "21888i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "21888i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.905511811023622,
      "duration": "13i"
    },
    {
      "time": "21924i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.8818897637795275,
      "duration": "14i"
    },
    {
      "time": "21924i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.905511811023622,
      "duration": "14i"
    },
    {
      "time": "21960i",
      "midiNote": 70,
      "noteName": "A#4",
      "velocity": 0.937007874015748,
      "duration": "14i"
    },
    {
      "time": "21960i",
      "midiNote": 66,
      "noteName": "F#4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "21996i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.9212598425196851,
      "duration": "13i"
    },
    {
      "time": "21996i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "22032i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9448818897637795,
      "duration": "13i"
    },
    {
      "time": "22032i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.889763779527559,
      "duration": "14i"
    },
    {
      "time": "22056i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.9212598425196851,
      "duration": "14i"
    },
    {
      "time": "22056i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.9291338582677166,
      "duration": "14i"
    }
//   ]
// }






          ]).start(0);