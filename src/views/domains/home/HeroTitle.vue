<template>
  <section class="section-process">
    <div class="section-container">
      <div class="process-steps-container">
        <div class="process-step-container process-step-1">
          <div class="process-step-title-container">
            <h1 class="process-step-title">Construction</h1>
            <div class="process-step-title-overlay">Construction</div>
          </div>
        </div>
        <div class="process-step-container process-step-2">
          <div class="process-step-title-container">
            <h1 class="process-step-title">Monitoring</h1>
            <div class="process-step-title-overlay">Monitoring</div>
          </div>
        </div>
        <div class="process-step-container process-step-3">
          <div class="process-step-title-container">
            <h1 class="process-step-title">System</h1>
            <div class="process-step-title-overlay">System</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@mixin add-process-step($first-color, $second-color, $margin-right, $index) {
  margin-right: $margin-right;

  .process-step-title-overlay {
    background-image: linear-gradient(90deg, $first-color, $second-color);
    animation: animated-gradient-title-#{$index} 8s infinite;
  }
}

.section-process {
  margin: 20px auto auto auto;
  max-width: 1200px;
  user-select: none;

  .process-steps-container {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;

    .process-step-container {
      .process-step-title-container {
        margin-top: -16px;
        position: relative;

        .process-step-title,
        .process-step-title-overlay {
          font-size: 100px;
          font-weight: 900;
          margin: 0;
          line-height: 1.2em;
          letter-spacing: -4px;

          @include sm-and-down-alternative() {
            font-size: 52px;
          }
        }

        .process-step-title-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: auto;
          padding-right: 30px;
          height: 100%;
          opacity: 1;
          -webkit-text-fill-color: transparent;
          -webkit-background-clip: text;
        }
      }

      $mainColors: ("1", $yellow, $dark-yellow, 15px), ("2", $dark-yellow, $dark-yellow-2, 15px),
        ("3", $dark-yellow-2, $yellow, 0);

      @each $index, $first-color, $second-color, $margin-right in $mainColors {
        &.process-step-#{$index} {
          @include add-process-step($first-color, $second-color, $margin-right, $index);
        }
      }
    }
  }

  @keyframes animated-gradient-title-1 {
    0%,
    16.667%,
    100% {
      opacity: 1;
    }
    33.333%,
    83.333% {
      opacity: 0;
    }
  }

  @keyframes animated-gradient-title-2 {
    0%,
    16.667%,
    66.667%,
    100% {
      opacity: 0;
    }
    33.333%,
    50% {
      opacity: 1;
    }
  }

  @keyframes animated-gradient-title-3 {
    0%,
    50%,
    100% {
      opacity: 0;
    }
    66.667%,
    83.333% {
      opacity: 1;
    }
  }
}
</style>
