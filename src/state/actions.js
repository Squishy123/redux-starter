import * as consts from './constants';
import * as store from 'store';

export function changeBG(bgColor) {
    store.set('bgColor', bgColor);
    return { type: consts.CHANGE_BG, bgColor: bgColor };
}
