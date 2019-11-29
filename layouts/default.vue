<template>
  <div
    class="w-screen min-h-screen bg-gray-200 font-base font-regular flex flex-col lg:flex-row flex-no-wrap"
  >
    <aside class="p-8 w-full lg:w-1/3 xl:w-1/4">
      <h1 class="flex flex-col leading-none mb-8 w-full">
        <span class="inline-block text-3xl font-semibold mb-1 text-gray-800">
          Good Morning,
        </span>
        <span class="text-5xl font-bold text-gray-900">Tim</span>
      </h1>
      <div class="flex flex-col md:flex-row lg:flex-col">
        <Card class="w-full md:w-1/2 lg:w-full mb-4 md:mr-2 lg:mr-0">
          <h2 class="font-semibold uppercase text-sm text-green-600 mb-2">
            Summary
          </h2>
          <ul>
            <li class="flex items-center mb-1">
              <icon
                :icon="['fal', 'lightbulb']"
                class="w-4 h-4 mr-2 text-orange-500"
              />
              16 Lights on in 3 Rooms
            </li>
            <li class="flex items-center mb-1">
              <icon :icon="['fal', 'fan']" class="w-4 h-4 mr-2 text-blue-600" />
              Air Condition is set to 68°
            </li>
          </ul>
        </Card>
        <Card class="w-full md:w-1/2 lg:w-full mb-4 md:ml-2 lg:ml-0">
          <h2 class="font-semibold uppercase text-sm text-indigo-600 mb-2">
            Based On Your Habits
          </h2>
          <div class="flex">
            <SceneButton :colors="colors[0]" name="Zen" room="Living Room" />
            <SceneButton :colors="colors[1]" name="Relax" room="Kitchen" />
          </div>
        </Card>
      </div>
    </aside>
    <div class="p-8 w-full lg:w-2/3 xl:w-3/4">
      <nuxt />
    </div>
  </div>
</template>

<script>
import resolveConfig from 'tailwindcss/resolveConfig'
import Card from '../components/Card'
import SceneButton from '../components/SceneButton'
import tailwindConfig from '~/tailwind.config.js'

const fullConfig = resolveConfig(tailwindConfig)

export default {
  name: 'Default',
  components: {
    Card,
    SceneButton
  },
  computed: {
    colors() {
      return [
        [
          fullConfig.theme.colors.blue['500'],
          fullConfig.theme.colors.green['400']
        ],
        [
          fullConfig.theme.colors.orange['500'],
          fullConfig.theme.colors.yellow['400']
        ]
      ]
    }
  }
}
</script>
