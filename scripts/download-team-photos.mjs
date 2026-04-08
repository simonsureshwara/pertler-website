import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import https from 'https';

const BASE = 'C:/Users/Simon/Documents/Projects/Github Projects/Pertler/public/images/team';

const teams = {
  heizung: [
    'https://www.pertler.de/wp-content/uploads/2026/03/DSC02286-2-1-1000x1000.jpg',
    'https://www.pertler.de/wp-content/uploads/2026/03/DSC02214-1000x1000.jpg',
    'https://www.pertler.de/wp-content/uploads/2026/03/DSC02211-2-1000x1000.jpg',
    'https://www.pertler.de/wp-content/uploads/2026/03/DSC02224-1-1000x1000.jpg',
    'https://www.pertler.de/wp-content/uploads/2026/03/DSC02139-2-1-1000x1000.jpg',
    'https://www.pertler.de/wp-content/uploads/2026/03/DSC02180-1-1000x1000.jpg',
    'https://www.pertler.de/wp-content/uploads/2026/03/DSC02192-1-1000x1000.jpg',
    'https://www.pertler.de/wp-content/uploads/2026/03/DSC02295-1000x1000.jpg',
    'https://www.pertler.de/wp-content/uploads/2024/06/1DE5E797-6EE9-4F35-B756-173328B81668-3567-00000BD979705192-2-1000x1000.jpg',
    'https://www.pertler.de/wp-content/uploads/2024/06/7BED774C-CE33-409A-A93A-0AD9CD8B7C36-1951-000001E6D0D5F375-3-1000x1000.jpg',
    'https://www.pertler.de/wp-content/uploads/2024/06/D19C3E4A-FABF-4892-B1E7-B2F91E97D0CD-3567-00000BECF93F527F-6-1000x976.jpg',
    'https://www.pertler.de/wp-content/uploads/2024/06/90667C0C-0035-4700-900E-FDF467D2517F-1951-000001E773B6E17D-3-1000x1000.jpg',
    'https://www.pertler.de/wp-content/uploads/2024/07/BEECBA26-D386-49E4-8D21-8E83BA8B0D1C-2955-00000377023859F4-2-1000x1000.jpg',
    'https://www.pertler.de/wp-content/uploads/2024/06/0FA64103-18AD-49A0-8E61-248B4E8DB44D-1951-000001E62545A887-2-1000x1000.jpg',
    'https://www.pertler.de/wp-content/uploads/2024/07/5D37EB08-421F-4B3C-B1BF-5CC20DC30F50-2547-000002168E630522-1000x1000.jpg',
    'https://www.pertler.de/wp-content/uploads/2024/06/43DCDC21-00DF-4B32-BB1C-3DC6A0288A60-785-00000130CDBDD87F-3-1000x1000.jpg',
    'https://www.pertler.de/wp-content/uploads/2024/07/391D0C99-C12B-42E4-8BE4-7518AFCEF5C5-3380-000003DF813BB58F-2-1000x1000.jpg',
    'https://www.pertler.de/wp-content/uploads/2024/07/9F8D3D41-3FEC-4AD6-BA49-A034F8190518-3582-000006F8F4FAAD38-1000x996.jpg',
    'https://www.pertler.de/wp-content/uploads/2024/07/163E12FD-399D-4A4C-BC0D-803E309D43CB-2955-00000322E7091392-2-1000x1000.jpg',
    'https://www.pertler.de/wp-content/uploads/2024/07/5BF1FE44-4EB8-4B10-8518-D2C11BACFA31-1657-000001488018E8D9-1000x1000.jpg',
    'https://www.pertler.de/wp-content/uploads/2024/07/4C0B2CDA-BC6F-45E8-B4E8-ABF0227F1E29-1657-00000148CE7AC2D9-1000x1000.jpg',
    'https://www.pertler.de/wp-content/uploads/2024/07/6EB57F34-1742-44D1-BD58-10C9BF0DDC18-3380-000003E09159CDF2-1000x949.jpg',
    'https://www.pertler.de/wp-content/uploads/2024/07/85431D77-987D-472F-B417-92C9DD31C3AC-5823-00000BB395C0B0BA-1-1000x1000.jpg',
    'https://www.pertler.de/wp-content/uploads/2025/10/DSC01164-1000x1000.jpg',
    'https://www.pertler.de/wp-content/uploads/2024/06/D1C8015D-5E15-451C-951E-5AD6F18F74DA-3567-00000BED10AA050B-4-1000x1000.jpg',
    'https://www.pertler.de/wp-content/uploads/2024/07/C971B473-35AC-4935-9062-83DD24C66A89-7900-00000C6A31FF7072-1000x1000.jpg',
    'https://www.pertler.de/wp-content/uploads/2024/07/49E82388-FA4A-48E2-B65F-D63626717C31-7900-00000D281023EE28-1-1000x1000.jpg',
    'https://www.pertler.de/wp-content/uploads/2024/07/197ECACC-ECB5-4EC6-809E-B564B5973420-3567-00000AB71E062F27-2-1000x1000.jpg',
    'https://www.pertler.de/wp-content/uploads/2024/06/CDF292CE-1624-4468-B077-758806B35B1A-785-000001309C42F2FE-1000x1000.jpg',
    'https://www.pertler.de/wp-content/uploads/2024/06/FB4C8D85-DE34-460B-A14B-5C251BA6EDB5-1951-000001E6A429625B-5-1000x1000.jpg',
    'https://www.pertler.de/wp-content/uploads/2024/06/AE7BF98B-503C-4DAF-83A2-E2F996E444E2-1951-000001E7220325B6-3-1000x1000.jpg',
    'https://www.pertler.de/wp-content/uploads/2024/07/917392C5-341E-4292-A67E-377B9CA1C4D0-2547-0000021668D1539F-11-1000x977.jpg',
    'https://www.pertler.de/wp-content/uploads/2024/06/77CB59E3-795F-4B28-93CD-0B7F381AF35A-7356-00000DBBF761FDD3-1000x1000.jpg',
    'https://www.pertler.de/wp-content/uploads/2025/03/E11557B3-CAC6-4F83-A768-CBE7A7083AA5-2955-000003776BB6084F-1000x1000.jpg',
    'https://www.pertler.de/wp-content/uploads/2024/07/9694E87D-6676-4FC8-A104-8FEBED709733-1657-000001488EF9734D-1000x1000.jpg',
    'https://www.pertler.de/wp-content/uploads/2024/07/0993D7A3-84DA-4347-BEA7-2B9C30CB2CA2-3380-000003E0A65C3C34-1000x1000.jpg',
    'https://www.pertler.de/wp-content/uploads/2024/07/271DC67A-8FD1-4CF9-8401-7504D5306D74-3582-000006F87F1AF149-1000x1000.jpg',
    'https://www.pertler.de/wp-content/uploads/2024/07/3005C1FE-562F-47C7-8C8E-28A6BF9E1C4B-7900-00000D27FF232F96-1-1000x1000.jpg',
    'https://www.pertler.de/wp-content/uploads/2025/05/DSCF1731-1000x1000.jpg',
  ],
  elektro: [
    'https://www.pertler.de/wp-content/uploads/2024/06/990DBAB4-A345-49CF-BB72-B47E2D95064C-3567-00000BD987EC81FE-2-1000x1000.jpg',
    'https://www.pertler.de/wp-content/uploads/2024/07/315D8487-A001-445C-B25C-A9C598694B7E-5823-00000BB3EDFC8C2A-1-1000x1000.jpg',
    'https://www.pertler.de/wp-content/uploads/2024/06/C5F9AE99-4877-4988-B998-CA36F04D1EEB-785-000001308D92A48C-2-1000x1000.jpg',
    'https://www.pertler.de/wp-content/uploads/2024/07/A477EB5E-2202-45AC-832D-0C03E0C146D6-7900-00000D1D79DA5AD7-2-1000x1000.jpg',
    'https://www.pertler.de/wp-content/uploads/2024/07/82A8EE1A-9A35-40B9-9604-309CA6F3044F-1217-0000035F8F82ABA1-1000x1000.jpg',
    'https://www.pertler.de/wp-content/uploads/2024/07/283314B4-60C9-4FEC-A53A-916EE9D09332-8519-00000F39E5AF691E-1-1000x1000.jpg',
  ],
  baeder: [
    'https://www.pertler.de/wp-content/uploads/2025/11/DSC1494-1000x1000.jpg',
    'https://www.pertler.de/wp-content/uploads/2021/07/Hans-1-1000x1000.jpg',
    'https://www.pertler.de/wp-content/uploads/2021/07/Heike-1000x1000.jpg',
    'https://www.pertler.de/wp-content/uploads/2024/07/E3914850-2D00-44CC-9F6B-6A8688A47E3D-28032-00004BB5176E7FF9-1000x1000.jpg',
    'https://www.pertler.de/wp-content/uploads/2024/07/7E284C69-A0E9-4865-AC69-AAC17F67819C-8519-00000F2B0416DE39-1-1000x1000.jpg',
    'https://www.pertler.de/wp-content/uploads/2024/07/E377A27A-0FCB-47C0-9CCC-6C8F47AB032E-2547-000002173C7C92AF-1-1000x1000.jpg',
    'https://www.pertler.de/wp-content/uploads/2024/07/8D1300A1-C4B1-4054-B791-F89D8F292847-7995-00000E6BA8649EF0-2-1000x1000.jpg',
    'https://www.pertler.de/wp-content/uploads/2024/07/8754A5C6-0C26-4A9E-A95E-F159E5A6505F-3380-000003E0460A0B94-1000x1000.jpg',
    'https://www.pertler.de/wp-content/uploads/2024/07/7D2F008C-6249-4778-9D79-120897ECD5D4-2955-0000037798CB7608-1-1000x1000.jpg',
    'https://www.pertler.de/wp-content/uploads/2024/07/B61DF76F-3CEE-424C-AD7B-F997B1FF9140-2955-00000322CF6AF86E-2-1000x1000.jpg',
    'https://www.pertler.de/wp-content/uploads/2024/07/043AF3E8-1C65-4772-8458-6C561B72A9B3-2547-0000021720D55330-1-1000x997.jpg',
    'https://www.pertler.de/wp-content/uploads/2024/07/83B0FDAB-49ED-432F-A50C-D5E996A90E24-2955-00000322A84AC3B3-3-1000x1000.jpg',
    'https://www.pertler.de/wp-content/uploads/2024/07/597830D5-DE94-475F-9E70-9DA07E1D8D98-2955-00000322999790AC-1-1000x1000.jpg',
    'https://www.pertler.de/wp-content/uploads/2024/07/10EB0538-C7EF-4A7B-BA3A-EF4068136C6F-1951-000001E730BB160C-1-1000x1000.jpg',
    'https://www.pertler.de/wp-content/uploads/2024/07/E6EF9A01-4953-44B7-BEC7-165D49C996BE-3380-000003E067BC747E-1000x1000.jpg',
    'https://www.pertler.de/wp-content/uploads/2024/07/FBACCEA5-7F00-42DF-93DE-D68A90172969-7900-00000C6A662E2DEA-1000x1000.jpg',
  ],
  kundendienst: [
    'https://www.pertler.de/wp-content/uploads/2024/07/IMG_1431-1-1000x1000.jpg',
    'https://www.pertler.de/wp-content/uploads/2024/07/IMG_1426-1-1000x1000.jpg',
    'https://www.pertler.de/wp-content/uploads/2024/07/IMG_1021-1-1000x1000.jpg',
    'https://www.pertler.de/wp-content/uploads/2024/07/9A72818D-46D3-4868-B9AE-9BE722005E24-785-000001304BD3ECCD-2-1000x1000.jpg',
    'https://www.pertler.de/wp-content/uploads/2024/07/E16112D3-EE8C-431B-945A-D87F0B2D0050-2547-0000021654493D83-1000x1000.jpg',
    'https://www.pertler.de/wp-content/uploads/2024/07/C11332B1-6899-47BD-BDBA-2F96021E19B3-8519-00000F6E46B00F68-2-1000x1000.jpg',
    'https://www.pertler.de/wp-content/uploads/2026/01/DSC09839-1-1000x1000.jpg',
    'https://www.pertler.de/wp-content/uploads/2024/07/ADDFCE7B-5DFF-4CE6-9CB0-C02F3C2FF401-7900-00000D1D961BB80A-2-1000x1000.jpg',
    'https://www.pertler.de/wp-content/uploads/2024/07/8FD4A09F-4A54-4D07-9E92-2BAC4F7E7A0B-3582-00000873F5B7673B-1000x1000.jpg',
    'https://www.pertler.de/wp-content/uploads/2024/07/A29FB470-83A9-4B1D-8C48-8FEFBD7477A6-1951-000001E7DC235687-3-1000x1000.jpg',
    'https://www.pertler.de/wp-content/uploads/2024/07/108CEF2D-5569-4C9A-ABDD-B6FE1197292C-8519-00000F2AA3D906D3-3-1000x965.jpg',
    'https://www.pertler.de/wp-content/uploads/2024/07/FABA4DE0-2016-4400-AA8B-30990BDDBD2A-7900-00000C6A9A100CB0-1000x998.jpg',
    'https://www.pertler.de/wp-content/uploads/2024/07/CDEE5444-288C-49BD-9BF9-35E1652F6778-8519-00000F2ADEF05866-2-1000x991.jpg',
    'https://www.pertler.de/wp-content/uploads/2024/07/31A7CFD3-BC76-4C1B-B77A-294879AE9C08-3582-000006F8A94DDCE3-1-1000x1000.jpg',
    'https://www.pertler.de/wp-content/uploads/2024/07/2d467d28-3d27-4cd4-b60f-6de91ba6c48f-3-1000x1000.jpg',
    'https://www.pertler.de/wp-content/uploads/2024/07/B41D7B00-4B34-479D-9320-43CAC7A3BEF2-2955-000003775A2B71B2-1-1000x994.jpg',
    'https://www.pertler.de/wp-content/uploads/2024/07/A8E97EFE-EFF9-4F0A-8DCE-AF2DCC8DA179-2955-0000032230D0D8A4-4-1000x958.jpg',
    'https://www.pertler.de/wp-content/uploads/2024/07/84A18E7B-BE36-4038-AF73-A31C428CCAA4-7900-00000C6A411034E8-1000x1000.jpg',
    'https://www.pertler.de/wp-content/uploads/2024/07/Unbenanntes_Projekt-2-1000x1000.jpg',
    'https://www.pertler.de/wp-content/uploads/2024/07/A315B059-3661-4734-A8CF-092D52D15FB5-7900-00000C6A92E12428-1000x1000.jpg',
    'https://www.pertler.de/wp-content/uploads/2024/07/C50AB558-BF32-4D36-A77E-9A13246E8653-3582-000006F8FC7D56D1-1000x1000.jpg',
    'https://www.pertler.de/wp-content/uploads/2024/07/48AF11ED-8DA1-4EE4-9A29-50B4C26783B1-5823-00000BB38E3942C7-1000x1000.jpg',
    'https://www.pertler.de/wp-content/uploads/2024/07/1AA6A61C-DB71-4D9D-9215-C0FD954F8935-5823-00000BB3BA74FBBE-1000x1000.jpg',
  ],
  misc: [
    'https://www.pertler.de/wp-content/uploads/2014/01/Pertler-GmbH_9405-e1495370739491.jpg',
    'https://www.pertler.de/wp-content/uploads/2025/02/SoMe-Urkunden-silver.png',
    'https://www.pertler.de/wp-content/uploads/2026/03/neues-Logo-2.jpg',
    'https://www.pertler.de/wp-content/uploads/2018/02/Haupt-logo.png',
  ],
};

function download(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return download(res.headers.location).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        res.resume();
        return reject(new Error(`HTTP ${res.statusCode} for ${url}`));
      }
      const chunks = [];
      res.on('data', (c) => chunks.push(c));
      res.on('end', () => resolve(Buffer.concat(chunks)));
      res.on('error', reject);
    }).on('error', reject);
  });
}

async function processTeam(team, urls) {
  const dir = path.join(BASE, team);
  let i = 1;
  for (const url of urls) {
    const outName = `${team}-${String(i).padStart(2, '0')}.webp`;
    const outPath = path.join(dir, outName);

    if (fs.existsSync(outPath)) {
      console.log(`  SKIP ${outName} (exists)`);
      i++;
      continue;
    }

    try {
      const buf = await download(url);
      await sharp(buf)
        .resize(400, 400, { fit: 'cover' })
        .webp({ quality: 80 })
        .toFile(outPath);
      const kb = Math.round(fs.statSync(outPath).size / 1024);
      console.log(`  OK   ${outName} (${kb}KB)`);
    } catch (err) {
      console.log(`  FAIL ${outName}: ${err.message}`);
    }
    i++;
  }
}

async function main() {
  let total = 0;
  for (const [team, urls] of Object.entries(teams)) {
    console.log(`\n[${team}] ${urls.length} photos`);
    await processTeam(team, urls);
    total += urls.length;
  }
  console.log(`\nDone. ${total} photos processed.`);
}

main();
