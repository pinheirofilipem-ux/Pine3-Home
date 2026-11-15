import {
  mdiHomeVariantOutline, mdiSofaOutline, mdiSilverwareForkKnife, mdiTableChair, mdiBedOutline, mdiTeddyBear, mdiDesk,
  mdiGarage, mdiFlowerOutline, mdiBalcony, mdiPool, mdiWashingMachine, mdiDoor, mdiDumbbell, mdiStairs, mdiShower,
  mdiTextureBox, mdiThermometer, mdiLightbulbOutline, mdiShieldHomeOutline, mdiCreationOutline, mdiPlay, mdiPause,
  mdiSkipNext, mdiMinus, mdiPlus, mdiClose, mdiChevronLeft, mdiLock, mdiLockOpenVariant, mdiPower, mdiFan,
  mdiRobotVacuum, mdiBlindsHorizontal, mdiPowerSocketEu, mdiToggleSwitchOutline, mdiGauge, mdiWeatherPartlyCloudy,
  mdiTelevision, mdiMotionSensor, mdiWindowOpenVariant,
} from "@mdi/js";

export const ICONS = {
  home: mdiHomeVariantOutline,
  therm: mdiThermometer,
  bulb: mdiLightbulbOutline,
  shield: mdiShieldHomeOutline,
  spark: mdiCreationOutline,
  play: mdiPlay,
  pause: mdiPause,
  next: mdiSkipNext,
  minus: mdiMinus,
  plus: mdiPlus,
  close: mdiClose,
  back: mdiChevronLeft,
  lock: mdiLock,
  unlock: mdiLockOpenVariant,
  power: mdiPower,
  fan: mdiFan,
  vacuum: mdiRobotVacuum,
  cover: mdiBlindsHorizontal,
  outlet: mdiPowerSocketEu,
  switch: mdiToggleSwitchOutline,
  sensor: mdiGauge,
  weather: mdiWeatherPartlyCloudy,
  media: mdiTelevision,
  motion: mdiMotionSensor,
  window: mdiWindowOpenVariant,
  room: mdiTextureBox,
};

// Room icons chosen by the integration (discovery.ROOM_ICONS) -> paths.
const ROOM: Record<string, string> = {
  "mdi:shower": mdiShower,
  "mdi:silverware-fork-knife": mdiSilverwareForkKnife,
  "mdi:table-chair": mdiTableChair,
  "mdi:sofa": mdiSofaOutline,
  "mdi:bed": mdiBedOutline,
  "mdi:teddy-bear": mdiTeddyBear,
  "mdi:desk": mdiDesk,
  "mdi:garage": mdiGarage,
  "mdi:flower": mdiFlowerOutline,
  "mdi:balcony": mdiBalcony,
  "mdi:pool": mdiPool,
  "mdi:washing-machine": mdiWashingMachine,
  "mdi:door": mdiDoor,
  "mdi:dumbbell": mdiDumbbell,
  "mdi:stairs": mdiStairs,
};

export const roomIcon = (icon: string | null | undefined): string => (icon && ROOM[icon]) || ICONS.room;
