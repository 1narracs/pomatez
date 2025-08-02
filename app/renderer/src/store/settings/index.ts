import { createSlice } from "@reduxjs/toolkit";
import { getFromStorage } from "utils";
import { SettingTypes, SettingsPayload } from "./types";
import { defaultSettings } from "./defaultSettings";

export type { SettingTypes };

function mergeSettings(
  base: SettingTypes,
  override: Partial<SettingTypes>
): SettingTypes {
  const merged: any = { ...base };

  for (const key in base) {
    const typedKey = key as keyof SettingTypes;
    const baseValue = base[typedKey];
    const overrideValue = override?.[typedKey];

    if (
      typeof baseValue === "object" &&
      baseValue !== null &&
      !Array.isArray(baseValue) &&
      typeof overrideValue === "object" &&
      overrideValue !== null &&
      !Array.isArray(overrideValue)
    ) {
      merged[typedKey] = mergeSettings(
        baseValue as SettingTypes,
        overrideValue as Partial<SettingTypes>
      );
    } else {
      merged[typedKey] = overrideValue ?? baseValue;
    }
  }
  return merged as SettingTypes;
}

const storedStateRaw = getFromStorage("state");
let storedSettings: Partial<SettingTypes> = {};

// Ensure storedStateRaw is a plain object (not null, not array, not primitive)
if (
  storedStateRaw &&
  typeof storedStateRaw === "object" &&
  !Array.isArray(storedStateRaw) &&
  "settings" in storedStateRaw &&
  typeof (storedStateRaw as any).settings === "object" &&
  !Array.isArray((storedStateRaw as any).settings)
) {
  storedSettings = (storedStateRaw as any)
    .settings as Partial<SettingTypes>;
}

const settings = mergeSettings(defaultSettings, storedSettings);

console.log("settings", settings);

const initialState: SettingTypes = settings;

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setIgnoreUpdate(state, action: SettingsPayload<"ignoreUpdate">) {
      state.ignoreUpdate = action.payload;
    },

    setAlwaysOnTop(state, action: SettingsPayload<"alwaysOnTop">) {
      state.alwaysOnTop = action.payload;
    },

    toggleNotificationSound(state) {
      state.notificationSoundOn = !state.notificationSoundOn;
    },

    setEnableDarkTheme(
      state,
      action: SettingsPayload<"enableDarkTheme">
    ) {
      state.enableDarkTheme = action.payload;
    },

    setFollowSystemTheme(
      state,
      action: SettingsPayload<"followSystemTheme">
    ) {
      state.followSystemTheme = action.payload;
    },

    setEnableCompactMode(
      state,
      action: SettingsPayload<"compactMode">
    ) {
      state.compactMode = action.payload;
    },

    setEnableFullscreenBreak(
      state,
      action: SettingsPayload<"enableFullscreenBreak">
    ) {
      state.enableFullscreenBreak = action.payload;
    },

    setEnableStrictMode(
      state,
      action: SettingsPayload<"enableStrictMode">
    ) {
      state.enableStrictMode = action.payload;
    },

    setEnableProgressAnimation(
      state,
      action: SettingsPayload<"enableProgressAnimation">
    ) {
      state.enableProgressAnimation = action.payload;
    },

    setEnableVoiceAssistance(
      state,
      action: SettingsPayload<"enableVoiceAssistance">
    ) {
      state.enableVoiceAssistance = action.payload;
    },

    setUseNativeTitlebar(
      state,
      action: SettingsPayload<"useNativeTitlebar">
    ) {
      state.useNativeTitlebar = action.payload;
    },

    setNotificationType(
      state,
      action: SettingsPayload<"notificationType">
    ) {
      state.notificationType = action.payload;
    },

    setCloseToTray(state, action: SettingsPayload<"closeToTray">) {
      state.closeToTray = action.payload;
    },

    setMinimizeToTray(
      state,
      action: SettingsPayload<"minimizeToTray">
    ) {
      state.minimizeToTray = action.payload;
    },

    setAutoStartWorkTime(
      state,
      action: SettingsPayload<"autoStartWorkTime">
    ) {
      state.autoStartWorkTime = action.payload;
    },

    setOpenAtLogin(state, action: SettingsPayload<"openAtLogin">) {
      state.openAtLogin = action.payload;
    },

    restoreDefaultSettings() {
      return defaultSettings;
    },
  },
});

export const {
  restoreDefaultSettings,
  setAlwaysOnTop,
  setAutoStartWorkTime,
  setCloseToTray,
  setEnableCompactMode,
  setEnableDarkTheme,
  setFollowSystemTheme,
  setEnableFullscreenBreak,
  setEnableProgressAnimation,
  setEnableStrictMode,
  setEnableVoiceAssistance,
  setIgnoreUpdate,
  setMinimizeToTray,
  setNotificationType,
  setOpenAtLogin,
  setUseNativeTitlebar,
  toggleNotificationSound,
} = settingsSlice.actions;

export default settingsSlice.reducer;
