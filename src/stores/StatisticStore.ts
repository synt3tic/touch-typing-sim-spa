import { defineStore } from 'pinia';
import { ref } from 'vue';
import { TryRecord } from '../interfaces/StatisticInterfaces';

export const useStatisticStore = defineStore('StatisticStore', () => {
  const statisticInfo = ref<TryRecord[]>([
    {
      id: 1,
      speed: 240,
      accuracy: 90,
    },
    {
      id: 2,
      speed: 280,
      accuracy: 92,
    },
  ]);

  const saveRecord = (speed: number, accuracy: number) => {
    const currentRecord: TryRecord = {
      id: statisticInfo.value.length + 1,
      speed: speed,
      accuracy: accuracy,
    };
    statisticInfo.value.push(currentRecord);
  };

  return {
    statisticInfo,
    saveRecord,
  };
});