synth7 = new Tone.PolySynth(3, Tone.SimpleSynth, {
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

          


            
var stem7 = new Tone.Part(function(time, note){
      synth7.triggerAttackRelease(note.noteName, note.duration, time, note.velocity);
    }, [

    // {
//   "16 - GM": [
    {
      "time": "5952i",
      "midiNote": 60,
      "noteName": "C4",
      "velocity": 0.889763779527559,
      "duration": "269i"
    },
    {
      "time": "6096i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.8818897637795275,
      "duration": "266i"
    },
    {
      "time": "6240i",
      "midiNote": 62,
      "noteName": "D4",
      "velocity": 0.937007874015748,
      "duration": "265i"
    },
    {
      "time": "6384i",
      "midiNote": 60,
      "noteName": "C4",
      "velocity": 0.8818897637795275,
      "duration": "265i"
    },
    {
      "time": "6528i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.8740157480314961,
      "duration": "268i"
    },
    {
      "time": "6672i",
      "midiNote": 62,
      "noteName": "D4",
      "velocity": 0.8582677165354331,
      "duration": "266i"
    },
    {
      "time": "6816i",
      "midiNote": 60,
      "noteName": "C4",
      "velocity": 0.8582677165354331,
      "duration": "265i"
    },
    {
      "time": "6960i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.8661417322834646,
      "duration": "268i"
    },
    {
      "time": "7104i",
      "midiNote": 62,
      "noteName": "D4",
      "velocity": 0.8976377952755905,
      "duration": "268i"
    },
    {
      "time": "7248i",
      "midiNote": 60,
      "noteName": "C4",
      "velocity": 0.8346456692913385,
      "duration": "268i"
    },
    {
      "time": "7392i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.889763779527559,
      "duration": "96i"
    },
    {
      "time": "17472i",
      "midiNote": 60,
      "noteName": "C4",
      "velocity": 0.8503937007874016,
      "duration": "269i"
    },
    {
      "time": "17616i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.8818897637795275,
      "duration": "266i"
    },
    {
      "time": "17760i",
      "midiNote": 62,
      "noteName": "D4",
      "velocity": 0.8740157480314961,
      "duration": "265i"
    },
    {
      "time": "17904i",
      "midiNote": 60,
      "noteName": "C4",
      "velocity": 0.8818897637795275,
      "duration": "265i"
    },
    {
      "time": "18048i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.8818897637795275,
      "duration": "268i"
    },
    {
      "time": "18192i",
      "midiNote": 62,
      "noteName": "D4",
      "velocity": 0.8582677165354331,
      "duration": "266i"
    },
    {
      "time": "18336i",
      "midiNote": 60,
      "noteName": "C4",
      "velocity": 0.8582677165354331,
      "duration": "265i"
    },
    {
      "time": "18480i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.8661417322834646,
      "duration": "268i"
    },
    {
      "time": "18624i",
      "midiNote": 62,
      "noteName": "D4",
      "velocity": 0.8661417322834646,
      "duration": "268i"
    },
    {
      "time": "18768i",
      "midiNote": 60,
      "noteName": "C4",
      "velocity": 0.8346456692913385,
      "duration": "268i"
    },
    {
      "time": "18912i",
      "midiNote": 61,
      "noteName": "C#4",
      "velocity": 0.8740157480314961,
      "duration": "96i"
    }
//   ]
// }







          ]).start(0);