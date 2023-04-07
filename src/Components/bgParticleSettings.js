const bgParticleSettings = {
  "background": {
    "color": {
      "value": "#ffffff"
    },
    "position": "50% 50%",
    "repeat": "no-repeat",
    "size": "cover"
  },
  "fullScreen": {
    "zIndex": 1
  },
  "particles": {
    "color": {
      "value": [
        "#5bc0eb",
        "#fde74c",
        "#9bc53d",
        "#e55934",
        "#fa7921"
      ]
    },
    "move": {
      "direction": "top",
      "enable": true,
      "outModes": {
        "bottom": "out",
        "left": "out",
        "right": "out",
        "top": "out"
      },
      "speed": 2
    },
    "number": {
      "value": 30
    },
    "opacity": {
      "random": {
        "enable": true,
        "minimumValue": 0.2
      },
      "value": {
        "min": 0.1,
        "max": 0.3
      },
      "animation": {
        "speed": 1,
        "minimumValue": 0.1
      }
    },
    "size": {
      "random": {
        "enable": true,
        "minimumValue": 100
      },
      "value": {
        "min": 100,
        "max": 140
      },
      "animation": {
        "enable": true,
        "speed": 10,
        "minimumValue": 5
      }
    }
  }
}

export default bgParticleSettings;