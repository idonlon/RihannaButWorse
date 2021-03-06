synth13 = new Tone.PolySynth(3, Tone.SimpleSynth, {
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


var stem13 = new Tone.Part(function(time, note){
      synth13.triggerAttackRelease(note.noteName, note.duration, time, note.velocity);
    }, [

    // {
//   "13 - GM": [
    {
      "time": "5964i",
      "midiNote": 27,
      "noteName": "D#1",
      "velocity": 0.8740157480314961,
      "duration": "365i"
    },
    {
      "time": "6144i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.889763779527559,
      "duration": "377i"
    },
    {
      "time": "6336i",
      "midiNote": 27,
      "noteName": "D#1",
      "velocity": 0.9291338582677166,
      "duration": "370i"
    },
    {
      "time": "6528i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.84251968503937,
      "duration": "370i"
    },
    {
      "time": "6720i",
      "midiNote": 27,
      "noteName": "D#1",
      "velocity": 0.9606299212598425,
      "duration": "372i"
    },
    {
      "time": "6912i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.7874015748031497,
      "duration": "371i"
    },
    {
      "time": "7104i",
      "midiNote": 27,
      "noteName": "D#1",
      "velocity": 0.889763779527559,
      "duration": "376i"
    },
    {
      "time": "7296i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.8267716535433071,
      "duration": "185i"
    },
    {
      "time": "13644i",
      "midiNote": 27,
      "noteName": "D#1",
      "velocity": 0.8740157480314961,
      "duration": "365i"
    },
    {
      "time": "13824i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.889763779527559,
      "duration": "377i"
    },
    {
      "time": "14016i",
      "midiNote": 27,
      "noteName": "D#1",
      "velocity": 0.9291338582677166,
      "duration": "192i"
    },
    {
      "time": "14988i",
      "midiNote": 27,
      "noteName": "D#1",
      "velocity": 0.8740157480314961,
      "duration": "365i"
    },
    {
      "time": "15168i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.889763779527559,
      "duration": "377i"
    },
    {
      "time": "15360i",
      "midiNote": 27,
      "noteName": "D#1",
      "velocity": 0.9291338582677166,
      "duration": "370i"
    },
    {
      "time": "15552i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.84251968503937,
      "duration": "192i"
    },
    {
      "time": "15744i",
      "midiNote": 27,
      "noteName": "D#1",
      "velocity": 0.9291338582677166,
      "duration": "370i"
    },
    {
      "time": "17484i",
      "midiNote": 27,
      "noteName": "D#1",
      "velocity": 0.8740157480314961,
      "duration": "365i"
    },
    {
      "time": "17664i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.889763779527559,
      "duration": "377i"
    },
    {
      "time": "17856i",
      "midiNote": 27,
      "noteName": "D#1",
      "velocity": 0.9291338582677166,
      "duration": "370i"
    },
    {
      "time": "18048i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.84251968503937,
      "duration": "370i"
    },
    {
      "time": "18240i",
      "midiNote": 27,
      "noteName": "D#1",
      "velocity": 0.9606299212598425,
      "duration": "372i"
    },
    {
      "time": "18432i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.7874015748031497,
      "duration": "371i"
    },
    {
      "time": "18624i",
      "midiNote": 27,
      "noteName": "D#1",
      "velocity": 0.889763779527559,
      "duration": "376i"
    },
    {
      "time": "18816i",
      "midiNote": 39,
      "noteName": "D#2",
      "velocity": 0.8267716535433071,
      "duration": "185i"
    },
    {
      "time": "22032i",
      "midiNote": 65,
      "noteName": "F4",
      "velocity": 0.5826771653543307,
      "duration": "240i"
    },
    {
      "time": "22032i",
      "midiNote": 73,
      "noteName": "C#5",
      "velocity": 0.6456692913385826,
      "duration": "240i"
    }
//   // ]
// }
    


          ]).start(0);