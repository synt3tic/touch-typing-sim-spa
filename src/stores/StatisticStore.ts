import { defineStore } from 'pinia';
import { ref } from 'vue';
import { TryRecord } from '../interfaces/StatisticInterfaces';

export const useStatisticStore = defineStore('StatisticStore', () => {
  const statisticInfo = ref<TryRecord[]>([]);

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