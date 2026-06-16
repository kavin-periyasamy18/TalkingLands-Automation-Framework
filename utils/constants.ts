export enum Timeout {
  SECONDS_1 = 1000,
  SECONDS_2 = 2000,
  SECONDS_3 = 3000,
  SECONDS_4 = 4000,
  SECONDS_5 = 5000,
  TYPE_CHAR_ACTION_DELAY_TIME = 30,
  ACTION_TIMEOUT = 30 * 1000,
  MINUTE_1 = 60 * 1000
}

export enum keyboardActions {
  TAB = "Tab",
  ENTER = "Enter",
  BACKSPACE = "Backspace",
  SPACE = "Space",
  ESCAPE = "Escape",
  DELETE = "Delete",
  PASTE = "Control+V",
  ARROW_LEFT = "ArrowLeft",
  PAGE_DOWN = 'PageDown'
}

export type POSITION = {
  x: number
  y: number
}