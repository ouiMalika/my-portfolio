import { chromium } from 'playwright';
import fs from 'node:fs';
const browser=await chromium.launch({channel:'chrome',headless:true});
const page=await browser.newPage({viewport:{width:1200,height:800},deviceScaleFactor:1});
await page.goto('http://localhost:5175');await page.evaluate(()=>document.fonts.ready);
fs.mkdirSync('/tmp/portfolio-assets/frames',{recursive:true});
async function shot(name,i){await page.waitForTimeout(350);await page.screenshot({path:`/tmp/portfolio-assets/frames/${name}-${i}.png`});}
async function jump(screen){await page.keyboard.press('Control+Shift+KeyP');await page.locator(`[data-jump="${screen}"]`).click();}
await shot('intro',0);await jump('consent');await shot('intro',1);await page.locator('#consent').check();await shot('intro',2);await jump('background');await shot('intro',3);
await jump('digital');await shot('digital',0);await page.keyboard.press('1');await shot('digital',1);await page.keyboard.press('Enter');await shot('digital',2);await page.keyboard.press('2');await shot('digital',3);await page.keyboard.press('Enter');await shot('digital',4);
await jump('transition');await shot('physical',0);await jump('physical');await shot('physical',1);await page.keyboard.press('2');await shot('physical',2);await page.keyboard.press('Enter');await shot('physical',3);await page.keyboard.press('1');await shot('physical',4);
await browser.close();
