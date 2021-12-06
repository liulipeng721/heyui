import locale from 'heyui/locale';

export default function (key, value, defaultValue) {
  if (defaultValue == null) {
    return locale.t.apply(this, [key, value]);
    // return locale.t(key, value);
  }
  return defaultValue;
}
