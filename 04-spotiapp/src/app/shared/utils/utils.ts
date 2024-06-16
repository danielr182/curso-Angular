export class Utils {
  static isReachingBottonPage(): boolean {
    const clientHeight = document.documentElement.clientHeight  || document.body.clientHeight;
    const scrollPos = document.documentElement.scrollTop || document.body.scrollTop;
    const maxPos = document.documentElement.scrollHeight || document.body.scrollHeight;
    const positionInDocument = (clientHeight  * 1.4) + ( scrollPos );
    return positionInDocument > maxPos;
  }
}