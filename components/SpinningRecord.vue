<template>
    <div class="spinning-record" :class="positionClass">
      <img src="/img/aaronthommy-home-icon-600x600.png" alt="Vinyl Record" class="record-image" />
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  
  const props = defineProps({
    position: {
      type: String,
      default: 'right', // 'right', 'top', 'left', 'bottom'
      validator: (value) => ['right', 'top', 'left', 'bottom', 'top-right'].includes(value)
    },
    size: {
      type: String,
      default: 'medium', // 'small', 'medium', 'large'
      validator: (value) => ['small', 'medium', 'large'].includes(value)
    }
  });
  
  // Calculate position and size classes
  const positionClass = computed(() => {
    return [`position-${props.position}`, `size-${props.size}`];
  });
  </script>
  
  <style scoped>
  .spinning-record {
    position: absolute;
    z-index: 1;
    animation: spin 20s linear infinite;
    transform-origin: center center;
    opacity: 0.65;
    transition: all 0.5s ease;
    filter: drop-shadow(0 8px 20px rgba(0, 0, 0, 0.15));
  }
  
  .spinning-record:hover {
    opacity: 0.85;
    transform: scale(1.02) rotate(20deg);
    animation-play-state: paused;
  }
  
  /* Position variants */
  .position-right {
    right: 6%;
    top: -22%;
  }
  
  .position-left {
    left: 15%;
    top: 10%;
  }
  
  .position-top {
    right: 5%;
    top: -20%;
  }
  
  .position-bottom {
    right: 5%;
    bottom: -10%;
  }
  
  .position-top-right {
    right: 8%;
    top: -18%;
  }
  
  /* Size variants */
  .size-small {
    width: 180px;
  }
  
  .size-medium {
    width: 250px;
  }
  
  .size-large {
    width: 350px;
  }
  
  .record-image {
    width: 100%;
    height: auto;
    filter: drop-shadow(0 5px 15px rgba(0, 0, 0, 0.15));
    border-radius: 50%;
  }
  
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  
  /* Dark mode adjustments */
  :deep(.dark) .record-image {
    filter: drop-shadow(0 5px 15px rgba(0, 0, 0, 0.4)) brightness(0.85);
  }
  
  /* Responsive adjustments */
  @media (max-width: 1400px) {
    .size-large {
      width: 300px;
    }
    .position-right, .position-left {
      right: 10%;
      left: auto;
    }
  }
  
  @media (max-width: 1200px) {
    .size-large {
      width: 250px;
    }
    .size-medium {
      width: 200px;
    }
    .position-right, .position-left {
      right: 15%;
      left: auto;
    }
  }
  
  @media (max-width: 768px) {
    .size-large, .size-medium {
      width: 150px;
    }
    .size-small {
      width: 120px;
    }
    .position-top, .position-top-right {
      top: -66px;
      right: 20px;
    }
  }
  </style>