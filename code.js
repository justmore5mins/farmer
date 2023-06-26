var _E5_85_AB_E8_B7_AF_E7_81_8C_E6_BA_89_E6_8E_A7_E5_88_B6_E5_99_A8__E4_B8_8A_E7_B7_9A_E7_8B_80_E6_85_8B;
var _E5_8D_80_E5_9F_9F_E5_90_8D_E7_A8_B1;
var _E5_85_AB_E8_B7_AF_E7_81_8C_E6_BA_89_E6_8E_A7_E5_88_B6_E5_99_A8__E8_A8_AD_E5_82_99_E7_B7_A8_E8_99_9F;
var _E5_85_AB_E8_B7_AF_E7_81_8C_E6_BA_89_E6_8E_A7_E5_88_B6_E5_99_A8__E7_B9_BC_E9_9B_BB_E5_99_A8_E7_B7_A8_E8_99_9F;
var _E5_85_AB_E8_B7_AF_E7_81_8C_E6_BA_89_E6_8E_A7_E5_88_B6_E5_99_A8__E6_B5_81_E9_87_8F_E8_A8_88;
var _E4_B8_89_E8_B7_AF_E5_9C_9F_E6_BA_BC_E5_99_A8__E8_A8_AD_E5_82_99_E7_B7_A8_E8_99_9F;
var _E4_B8_89_E8_B7_AF_E5_9C_9F_E6_BA_BC_E5_99_A8__E5_9C_9F_E5_A3_A4_E6_BA_BC_E5_BA_A6;
var LineBot_E9_A0_BB_E9_81_93;
var _E7_81_8C_E6_BA_89_E6_99_82_E9_96_93__E7_A7_92_;
var _E6_98_A8_E6_97_A5_E6_BE_86_E6_B0_B4_E6_AC_A1_E6_95_B8;
var _E8_A8_88_E6_95_B8_E5_99_A8;
var _E6_BA_BC_E5_BA_A6_E8_A8_88_E6_95_B8_E5_99_A8;
var _E5_B9_B3_E5_9D_87_E5_9C_9F_E5_A3_A4_E6_BA_BC_E5_BA_A6;
var Line_E6_AC_8A_E6_9D_96;
var _E4_B8_8A_E7_B7_9A_E7_8B_80_E6_85_8B_E5_88_A4_E5_AE_9A__E5_85_AB_E8_B7_AF;
var _E6_B5_81_E9_87_8F_E8_A8_88;
var _E6_98_A8_E6_97_A5_E5_B9_B3_E5_9D_87_E5_9C_9F_E5_A3_A4_E6_BA_BC_E5_BA_A6;
var _E6_98_A8_E6_97_A5_E6_BE_86_E6_B0_B4_E7_B8_BD_E9_87_8F;
var _E7_9B_AE_E5_89_8D_E7_81_8C_E6_BA_89_E6_A8_A1_E5_BC_8F;
var _E6_98_A8_E6_97_A5_E6_97_A5_E6_9C_9F;
var _E6_9C_80_E8_BF_91_E6_BE_86_E6_B0_B4_E6_99_82_E9_96_93;
var _E4_B8_8A_E9_96_BE_E5_80_BC;
var _E4_B8_8B_E9_96_BE_E5_80_BC;

async function __E5_95_9F_E5_8B_95_E7_81_8C_E6_BA_89() {
  await controlCommand(_E5_85_AB_E8_B7_AF_E7_81_8C_E6_BA_89_E6_8E_A7_E5_88_B6_E5_99_A8__E8_A8_AD_E5_82_99_E7_B7_A8_E8_99_9F[0], {"on":parseInt(_E5_85_AB_E8_B7_AF_E7_81_8C_E6_BA_89_E6_8E_A7_E5_88_B6_E5_99_A8__E7_B9_BC_E9_9B_BB_E5_99_A8_E7_B7_A8_E8_99_9F, 10),});
  await delay(5);
  if ((/*outer_variable_mqtt 八路灌溉控制器-設備編號[1].switchs*/.toString().substr(-_E5_85_AB_E8_B7_AF_E7_81_8C_E6_BA_89_E6_8E_A7_E5_88_B6_E5_99_A8__E7_B9_BC_E9_9B_BB_E5_99_A8_E7_B7_A8_E8_99_9F, 1)) == 1) {
    _E8_A8_88_E6_95_B8_E5_99_A8 = _E8_A8_88_E6_95_B8_E5_99_A8 + 1;
    await line_notify(Line_E6_AC_8A_E6_9D_96,([_E5_8D_80_E5_9F_9F_E5_90_8D_E7_A8_B1,'目前土壤溼度:',(Math.round(((/*outer_variable_mqtt 三路土溼器-土壤溼度[1].三路土溼器-土壤溼度[2]*/))*10))/10,'%',('\n'),'啟動澆水'].join('')));
  } else if ((/*outer_variable_mqtt 八路灌溉控制器-設備編號[1].switchs*/.toString().substr(-_E5_85_AB_E8_B7_AF_E7_81_8C_E6_BA_89_E6_8E_A7_E5_88_B6_E5_99_A8__E7_B9_BC_E9_9B_BB_E5_99_A8_E7_B7_A8_E8_99_9F, 1)) == 0) {
    await line_notify(Line_E6_AC_8A_E6_9D_96,(String(_E5_8D_80_E5_9F_9F_E5_90_8D_E7_A8_B1) + String('灌溉控制器未正常啟動')));
  }
  await delay(_E7_81_8C_E6_BA_89_E6_99_82_E9_96_93__E7_A7_92_);
  if ((/*outer_variable_mqtt 八路灌溉控制器-設備編號[1].switchs*/.toString().substr(-_E5_85_AB_E8_B7_AF_E7_81_8C_E6_BA_89_E6_8E_A7_E5_88_B6_E5_99_A8__E7_B9_BC_E9_9B_BB_E5_99_A8_E7_B7_A8_E8_99_9F, 1)) == 1) {
    await controlCommand(_E5_85_AB_E8_B7_AF_E7_81_8C_E6_BA_89_E6_8E_A7_E5_88_B6_E5_99_A8__E8_A8_AD_E5_82_99_E7_B7_A8_E8_99_9F[0], {"off":parseInt(_E5_85_AB_E8_B7_AF_E7_81_8C_E6_BA_89_E6_8E_A7_E5_88_B6_E5_99_A8__E7_B9_BC_E9_9B_BB_E5_99_A8_E7_B7_A8_E8_99_9F, 10),});
    await refreshSensor(_E5_85_AB_E8_B7_AF_E7_81_8C_E6_BA_89_E6_8E_A7_E5_88_B6_E5_99_A8__E8_A8_AD_E5_82_99_E7_B7_A8_E8_99_9F[0]);
    await delay(5);
    if ((/*outer_variable_mqtt 八路灌溉控制器-設備編號[1].switchs*/.toString().substr(-_E5_85_AB_E8_B7_AF_E7_81_8C_E6_BA_89_E6_8E_A7_E5_88_B6_E5_99_A8__E7_B9_BC_E9_9B_BB_E5_99_A8_E7_B7_A8_E8_99_9F, 1)) == 0) {
      await line_notify(Line_E6_AC_8A_E6_9D_96,([_E5_8D_80_E5_9F_9F_E5_90_8D_E7_A8_B1,'已澆水',_E7_81_8C_E6_BA_89_E6_99_82_E9_96_93__E7_A7_92_,'秒',('\n'),'今日澆水次數:',_E8_A8_88_E6_95_B8_E5_99_A8,('\n'),'目前土壤溼度:',(Math.round(((/*outer_variable_mqtt 三路土溼器-土壤溼度[1].三路土溼器-土壤溼度[2]*/))*10))/10,'%'].join('')));
    } else if ((/*outer_variable_mqtt 八路灌溉控制器-設備編號[1].switchs*/.toString().substr(-_E5_85_AB_E8_B7_AF_E7_81_8C_E6_BA_89_E6_8E_A7_E5_88_B6_E5_99_A8__E7_B9_BC_E9_9B_BB_E5_99_A8_E7_B7_A8_E8_99_9F, 1)) == 1) {
      await line_notify(Line_E6_AC_8A_E6_9D_96,(String(_E5_8D_80_E5_9F_9F_E5_90_8D_E7_A8_B1) + String('灌溉控制器未正常關閉')));
    }
  }
}

async function __E9_97_9C_E9_96_89_E7_81_8C_E6_BA_89() {
  await controlCommand(_E5_85_AB_E8_B7_AF_E7_81_8C_E6_BA_89_E6_8E_A7_E5_88_B6_E5_99_A8__E8_A8_AD_E5_82_99_E7_B7_A8_E8_99_9F[0], {"off":parseInt(_E5_85_AB_E8_B7_AF_E7_81_8C_E6_BA_89_E6_8E_A7_E5_88_B6_E5_99_A8__E7_B9_BC_E9_9B_BB_E5_99_A8_E7_B7_A8_E8_99_9F, 10),});
  await refreshSensor(_E5_85_AB_E8_B7_AF_E7_81_8C_E6_BA_89_E6_8E_A7_E5_88_B6_E5_99_A8__E8_A8_AD_E5_82_99_E7_B7_A8_E8_99_9F[0]);
  await delay(5);
  if ((/*outer_variable_mqtt 八路灌溉控制器-設備編號[1].switchs*/.toString().substr(-_E5_85_AB_E8_B7_AF_E7_81_8C_E6_BA_89_E6_8E_A7_E5_88_B6_E5_99_A8__E7_B9_BC_E9_9B_BB_E5_99_A8_E7_B7_A8_E8_99_9F, 1)) == 0) {
    await line_notify(Line_E6_AC_8A_E6_9D_96,([_E5_8D_80_E5_9F_9F_E5_90_8D_E7_A8_B1,'澆水結束',('\n'),'今日澆水次數:',_E8_A8_88_E6_95_B8_E5_99_A8,('\n'),'目前土壤溼度:',(Math.round(((/*outer_variable_mqtt 三路土溼器-土壤溼度[1].三路土溼器-土壤溼度[2]*/))*10))/10,'%'].join('')));
  } else if ((/*outer_variable_mqtt 八路灌溉控制器-設備編號[1].switchs*/.toString().substr(-_E5_85_AB_E8_B7_AF_E7_81_8C_E6_BA_89_E6_8E_A7_E5_88_B6_E5_99_A8__E7_B9_BC_E9_9B_BB_E5_99_A8_E7_B7_A8_E8_99_9F, 1)) == 1) {
    await line_notify(Line_E6_AC_8A_E6_9D_96,(String(_E5_8D_80_E5_9F_9F_E5_90_8D_E7_A8_B1) + String('灌溉控制器未正常關閉')));
  }
}


_E5_85_AB_E8_B7_AF_E7_81_8C_E6_BA_89_E6_8E_A7_E5_88_B6_E5_99_A8__E4_B8_8A_E7_B7_9A_E7_8B_80_E6_85_8B = /*outer_variable 八路灌溉控制器-上線狀態.deviceSensorType*/;
_E5_8D_80_E5_9F_9F_E5_90_8D_E7_A8_B1 = /*outer_variable 區域名稱.string*/;
cron.schedule('0 0-0 * * *', async () => {
  const from = moment('2021-11-29 +0800', 'YYYY-MM-DD Z');
  const to = moment('2030-12-29 +0800', 'YYYY-MM-DD Z');

  if (moment().isBetween(from, to)) {
      _E8_A8_88_E6_95_B8_E5_99_A8 = 0;
  _E5_B9_B3_E5_9D_87_E5_9C_9F_E5_A3_A4_E6_BA_BC_E5_BA_A6 = 0;
  _E6_B5_81_E9_87_8F_E8_A8_88 = 0;
  _E6_98_A8_E6_97_A5_E6_BE_86_E6_B0_B4_E7_B8_BD_E9_87_8F = 0;
  _E6_BA_BC_E5_BA_A6_E8_A8_88_E6_95_B8_E5_99_A8 = 0;

  }
}, { timezone: 'Asia/Taipei' });cron.schedule('* 8-16 * * *', async () => {
  const from = moment('2021-11-05 +0800', 'YYYY-MM-DD Z');
  const to = moment('2030-12-05 +0800', 'YYYY-MM-DD Z');

  if (moment().isBetween(from, to)) {
      if (_E8_A8_88_E6_95_B8_E5_99_A8 < 5) {
    if ((/*outer_variable_mqtt 三路土溼器-土壤溼度[1].三路土溼器-土壤溼度[2]*/) <= _E4_B8_8B_E9_96_BE_E5_80_BC && (/*outer_variable_mqtt 八路灌溉控制器-設備編號[1].switchs*/.toString().substr(-_E5_85_AB_E8_B7_AF_E7_81_8C_E6_BA_89_E6_8E_A7_E5_88_B6_E5_99_A8__E7_B9_BC_E9_9B_BB_E5_99_A8_E7_B7_A8_E8_99_9F, 1)) == 0) {
      await __E5_95_9F_E5_8B_95_E7_81_8C_E6_BA_89();
      _E6_9C_80_E8_BF_91_E6_BE_86_E6_B0_B4_E6_99_82_E9_96_93 = [(moment().format('YYYY-MM-DD')),'-',(moment().format('HH:mm:ss'))].join('');
    } else if ((/*outer_variable_mqtt 三路土溼器-土壤溼度[1].三路土溼器-土壤溼度[2]*/) >= _E4_B8_8A_E9_96_BE_E5_80_BC && (/*outer_variable_mqtt 八路灌溉控制器-設備編號[1].switchs*/.toString().substr(-_E5_85_AB_E8_B7_AF_E7_81_8C_E6_BA_89_E6_8E_A7_E5_88_B6_E5_99_A8__E7_B9_BC_E9_9B_BB_E5_99_A8_E7_B7_A8_E8_99_9F, 1)) == 1) {
      await __E9_97_9C_E9_96_89_E7_81_8C_E6_BA_89();
    }
  }

  }
}, { timezone: 'Asia/Taipei' });cron.schedule('* 0-23 * * *', async () => {
  const from = moment('2022-05-17 +0800', 'YYYY-MM-DD Z');
  const to = moment('2050-06-17 +0800', 'YYYY-MM-DD Z');

  if (moment().isBetween(from, to)) {
      await writeModelLog(([_E5_8D_80_E5_9F_9F_E5_90_8D_E7_A8_B1,[('\n'),'澆水模式:',_E7_9B_AE_E5_89_8D_E7_81_8C_E6_BA_89_E6_A8_A1_E5_BC_8F].join(''),[('\n'),'最近澆水時間:',('\n'),_E6_9C_80_E8_BF_91_E6_BE_86_E6_B0_B4_E6_99_82_E9_96_93].join(''),[('\n'),'今日澆水次數:',_E8_A8_88_E6_95_B8_E5_99_A8,'次'].join(''),''].join('')));

  }
}, { timezone: 'Asia/Taipei' });
_E5_85_AB_E8_B7_AF_E7_81_8C_E6_BA_89_E6_8E_A7_E5_88_B6_E5_99_A8__E8_A8_AD_E5_82_99_E7_B7_A8_E8_99_9F = /*outer_variable 八路灌溉控制器-設備編號.device*/;
_E5_85_AB_E8_B7_AF_E7_81_8C_E6_BA_89_E6_8E_A7_E5_88_B6_E5_99_A8__E7_B9_BC_E9_9B_BB_E5_99_A8_E7_B7_A8_E8_99_9F = /*outer_variable 八路灌溉控制器-繼電器編號.number*/;
_E5_85_AB_E8_B7_AF_E7_81_8C_E6_BA_89_E6_8E_A7_E5_88_B6_E5_99_A8__E6_B5_81_E9_87_8F_E8_A8_88 = /*outer_variable 八路灌溉控制器-流量計.deviceSensorType*/;
_E4_B8_89_E8_B7_AF_E5_9C_9F_E6_BA_BC_E5_99_A8__E8_A8_AD_E5_82_99_E7_B7_A8_E8_99_9F = /*outer_variable 三路土溼器-設備編號.device*/;
_E4_B8_89_E8_B7_AF_E5_9C_9F_E6_BA_BC_E5_99_A8__E5_9C_9F_E5_A3_A4_E6_BA_BC_E5_BA_A6 = /*outer_variable 三路土溼器-土壤溼度.deviceSensorType*/;
LineBot_E9_A0_BB_E9_81_93 = /*outer_variable LineBot頻道.string*/;
_E7_81_8C_E6_BA_89_E6_99_82_E9_96_93__E7_A7_92_ = /*outer_variable 灌溉時間(秒).number*/;
_E6_98_A8_E6_97_A5_E6_BE_86_E6_B0_B4_E6_AC_A1_E6_95_B8 = 0;
_E6_BA_BC_E5_BA_A6_E8_A8_88_E6_95_B8_E5_99_A8 = 0;
_E5_B9_B3_E5_9D_87_E5_9C_9F_E5_A3_A4_E6_BA_BC_E5_BA_A6 = 0;
_E6_98_A8_E6_97_A5_E5_B9_B3_E5_9D_87_E5_9C_9F_E5_A3_A4_E6_BA_BC_E5_BA_A6 = 0;
_E6_B5_81_E9_87_8F_E8_A8_88 = 0;
_E6_98_A8_E6_97_A5_E6_BE_86_E6_B0_B4_E7_B8_BD_E9_87_8F = 0;
cron.schedule('1 0-23 * * *', async () => {
  const from = moment('2022-05-20 +0800', 'YYYY-MM-DD Z');
  const to = moment('2050-06-20 +0800', 'YYYY-MM-DD Z');

  if (moment().isBetween(from, to)) {
      _E5_B9_B3_E5_9D_87_E5_9C_9F_E5_A3_A4_E6_BA_BC_E5_BA_A6 = _E5_B9_B3_E5_9D_87_E5_9C_9F_E5_A3_A4_E6_BA_BC_E5_BA_A6 + (/*outer_variable_mqtt 三路土溼器-土壤溼度[1].三路土溼器-土壤溼度[2]*/);
  _E6_BA_BC_E5_BA_A6_E8_A8_88_E6_95_B8_E5_99_A8 = _E6_BA_BC_E5_BA_A6_E8_A8_88_E6_95_B8_E5_99_A8 + 1;

  }
}, { timezone: 'Asia/Taipei' });cron.schedule('* 8-16 * * *', async () => {
  const from = moment('2022-05-20 +0800', 'YYYY-MM-DD Z');
  const to = moment('2050-06-20 +0800', 'YYYY-MM-DD Z');

  if (moment().isBetween(from, to)) {
      for (var count = 0; count < 6; count++) {
    if ((/*outer_variable_mqtt 八路灌溉控制器-設備編號[1].switchs*/.toString().substr(-_E5_85_AB_E8_B7_AF_E7_81_8C_E6_BA_89_E6_8E_A7_E5_88_B6_E5_99_A8__E7_B9_BC_E9_9B_BB_E5_99_A8_E7_B7_A8_E8_99_9F, 1)) == 1) {
      _E6_B5_81_E9_87_8F_E8_A8_88 = _E6_B5_81_E9_87_8F_E8_A8_88 + (/*outer_variable_mqtt 八路灌溉控制器-流量計[1].八路灌溉控制器-流量計[2]*/);
    }
    await delay(10);
  }

  }
}, { timezone: 'Asia/Taipei' });cron.schedule('59 23-23 * * *', async () => {
  const from = moment('2022-05-20 +0800', 'YYYY-MM-DD Z');
  const to = moment('2050-06-20 +0800', 'YYYY-MM-DD Z');

  if (moment().isBetween(from, to)) {
      _E6_98_A8_E6_97_A5_E6_97_A5_E6_9C_9F = (moment().format('YYYY-MM-DD'));
  _E6_98_A8_E6_97_A5_E5_B9_B3_E5_9D_87_E5_9C_9F_E5_A3_A4_E6_BA_BC_E5_BA_A6 = _E5_B9_B3_E5_9D_87_E5_9C_9F_E5_A3_A4_E6_BA_BC_E5_BA_A6 / _E6_BA_BC_E5_BA_A6_E8_A8_88_E6_95_B8_E5_99_A8;
  _E6_98_A8_E6_97_A5_E6_BE_86_E6_B0_B4_E6_AC_A1_E6_95_B8 = _E8_A8_88_E6_95_B8_E5_99_A8;
  _E6_98_A8_E6_97_A5_E6_BE_86_E6_B0_B4_E7_B8_BD_E9_87_8F = _E6_B5_81_E9_87_8F_E8_A8_88;

  }
}, { timezone: 'Asia/Taipei' });

  if(init_set === 0) {
      _E8_A8_88_E6_95_B8_E5_99_A8 = 0;
  await controlCommand(_E5_85_AB_E8_B7_AF_E7_81_8C_E6_BA_89_E6_8E_A7_E5_88_B6_E5_99_A8__E8_A8_AD_E5_82_99_E7_B7_A8_E8_99_9F[0], {"total":(moment(0, 'HH:mm:ss').add(_E7_81_8C_E6_BA_89_E6_99_82_E9_96_93__E7_A7_92_, 's').format('HH:mm:ss'))});
  if (false) {
    _E7_9B_AE_E5_89_8D_E7_81_8C_E6_BA_89_E6_A8_A1_E5_BC_8F = '低溼灌溉模式';
    _E4_B8_8A_E9_96_BE_E5_80_BC = 25;
    _E4_B8_8B_E9_96_BE_E5_80_BC = 15;
    await line_notify(Line_E6_AC_8A_E6_9D_96,([('\n'),_E5_8D_80_E5_9F_9F_E5_90_8D_E7_A8_B1,'低溼灌溉模式','已啟動'].join('')));
  }
  if (false) {
    _E7_9B_AE_E5_89_8D_E7_81_8C_E6_BA_89_E6_A8_A1_E5_BC_8F = '中溼灌溉模式';
    _E4_B8_8A_E9_96_BE_E5_80_BC = 35;
    _E4_B8_8B_E9_96_BE_E5_80_BC = 25;
    await line_notify(Line_E6_AC_8A_E6_9D_96,([('\n'),_E5_8D_80_E5_9F_9F_E5_90_8D_E7_A8_B1,'中溼灌溉模式','已啟動'].join('')));
  }
  if (false) {
    _E7_9B_AE_E5_89_8D_E7_81_8C_E6_BA_89_E6_A8_A1_E5_BC_8F = '高溼灌溉模式';
    _E4_B8_8A_E9_96_BE_E5_80_BC = 45;
    _E4_B8_8B_E9_96_BE_E5_80_BC = 35;
    await line_notify(Line_E6_AC_8A_E6_9D_96,([('\n'),_E5_8D_80_E5_9F_9F_E5_90_8D_E7_A8_B1,'高溼灌溉模式','已啟動'].join('')));
  }
  if (false) {
    _E7_9B_AE_E5_89_8D_E7_81_8C_E6_BA_89_E6_A8_A1_E5_BC_8F = '乾溼循環模式';
    _E4_B8_8A_E9_96_BE_E5_80_BC = 45;
    _E4_B8_8B_E9_96_BE_E5_80_BC = 15;
    await line_notify(Line_E6_AC_8A_E6_9D_96,([('\n'),_E5_8D_80_E5_9F_9F_E5_90_8D_E7_A8_B1,'乾溼循環模式','已啟動'].join('')));
  }

    init_set = 1;
  }

  process.on('SIGQUIT', async () => {
    await controlCommand(_E5_85_AB_E8_B7_AF_E7_81_8C_E6_BA_89_E6_8E_A7_E5_88_B6_E5_99_A8__E8_A8_AD_E5_82_99_E7_B7_A8_E8_99_9F[0], {"off":parseInt(_E5_85_AB_E8_B7_AF_E7_81_8C_E6_BA_89_E6_8E_A7_E5_88_B6_E5_99_A8__E7_B9_BC_E9_9B_BB_E5_99_A8_E7_B7_A8_E8_99_9F, 10),});
  await line_notify(Line_E6_AC_8A_E6_9D_96,(String(_E5_8D_80_E5_9F_9F_E5_90_8D_E7_A8_B1) + String('條件灌溉任務結束運作')));

    process.exit()
  });

cron.schedule('0 12-12 * * *', async () => {
  const from = moment('2022-05-20 +0800', 'YYYY-MM-DD Z');
  const to = moment('2050-06-20 +0800', 'YYYY-MM-DD Z');

  if (moment().isBetween(from, to)) {
      await line_notify(Line_E6_AC_8A_E6_9D_96,([[_E6_98_A8_E6_97_A5_E6_97_A5_E6_9C_9F,('\n'),_E5_8D_80_E5_9F_9F_E5_90_8D_E7_A8_B1].join(''),[('\n'),'澆水模式:',_E7_9B_AE_E5_89_8D_E7_81_8C_E6_BA_89_E6_A8_A1_E5_BC_8F].join(''),[('\n'),'最近澆水時間:',('\n'),_E6_9C_80_E8_BF_91_E6_BE_86_E6_B0_B4_E6_99_82_E9_96_93].join(''),[('\n'),'昨日澆水次數:',_E6_98_A8_E6_97_A5_E6_BE_86_E6_B0_B4_E6_AC_A1_E6_95_B8,'次'].join(''),'',[('\n'),'昨日平均土壤溼度:',Math.round(_E6_98_A8_E6_97_A5_E5_B9_B3_E5_9D_87_E5_9C_9F_E5_A3_A4_E6_BA_BC_E5_BA_A6),'%'].join('')].join('')));

  }
}, { timezone: 'Asia/Taipei' });
line_channel(LineBot_E9_A0_BB_E9_81_93, async function channel(data__) {
  if (data__.message == String('?')) {
    await line_notify(Line_E6_AC_8A_E6_9D_96,(['指令:',('\n'),[_E5_8D_80_E5_9F_9F_E5_90_8D_E7_A8_B1,'啟動澆水',('\n')].join(''),[_E5_8D_80_E5_9F_9F_E5_90_8D_E7_A8_B1,'關閉澆水',('\n')].join(''),String(_E5_8D_80_E5_9F_9F_E5_90_8D_E7_A8_B1) + String('狀態')].join('')));
  }
  if (data__.message == String(_E5_8D_80_E5_9F_9F_E5_90_8D_E7_A8_B1) + String('啟動澆水')) {
    await __E5_95_9F_E5_8B_95_E7_81_8C_E6_BA_89();
  }
  if (data__.message == String(_E5_8D_80_E5_9F_9F_E5_90_8D_E7_A8_B1) + String('關閉澆水')) {
    await __E9_97_9C_E9_96_89_E7_81_8C_E6_BA_89();
  }
  if (data__.message == String(_E5_8D_80_E5_9F_9F_E5_90_8D_E7_A8_B1) + String('狀態')) {
    await line_notify(Line_E6_AC_8A_E6_9D_96,([_E5_8D_80_E5_9F_9F_E5_90_8D_E7_A8_B1,[('\n'),'澆水模式:',_E7_9B_AE_E5_89_8D_E7_81_8C_E6_BA_89_E6_A8_A1_E5_BC_8F].join(''),[('\n'),'最近澆水時間:',('\n'),_E6_9C_80_E8_BF_91_E6_BE_86_E6_B0_B4_E6_99_82_E9_96_93].join(''),[('\n'),'今日澆水次數:',_E8_A8_88_E6_95_B8_E5_99_A8,'次'].join(''),[('\n'),'目前土壤溼度:',(Math.round(((/*outer_variable_mqtt 三路土溼器-土壤溼度[1].三路土溼器-土壤溼度[2]*/))*10))/10,'%'].join('')].join('')));
  }
});

await refreshSensor(_E4_B8_89_E8_B7_AF_E5_9C_9F_E6_BA_BC_E5_99_A8__E8_A8_AD_E5_82_99_E7_B7_A8_E8_99_9F[0], parseInt(60, 10));
await refreshSensor(_E5_85_AB_E8_B7_AF_E7_81_8C_E6_BA_89_E6_8E_A7_E5_88_B6_E5_99_A8__E8_A8_AD_E5_82_99_E7_B7_A8_E8_99_9F[0], parseInt(60, 10));
_E4_B8_8A_E7_B7_9A_E7_8B_80_E6_85_8B_E5_88_A4_E5_AE_9A__E5_85_AB_E8_B7_AF = 0;
cron.schedule('* 0-23 * * *', async () => {
  const from = moment('2021-11-05 +0800', 'YYYY-MM-DD Z');
  const to = moment('2030-12-05 +0800', 'YYYY-MM-DD Z');

  if (moment().isBetween(from, to)) {
      if ((/*outer_variable_mqtt 八路灌溉控制器-上線狀態[1].八路灌溉控制器-上線狀態[2]*/) == 0 && _E4_B8_8A_E7_B7_9A_E7_8B_80_E6_85_8B_E5_88_A4_E5_AE_9A__E5_85_AB_E8_B7_AF == 0) {
    await line_notify(Line_E6_AC_8A_E6_9D_96,(String(_E5_8D_80_E5_9F_9F_E5_90_8D_E7_A8_B1) + String('八路控制器-離線')));
    _E4_B8_8A_E7_B7_9A_E7_8B_80_E6_85_8B_E5_88_A4_E5_AE_9A__E5_85_AB_E8_B7_AF = 1;
  }
  if ((/*outer_variable_mqtt 八路灌溉控制器-上線狀態[1].八路灌溉控制器-上線狀態[2]*/) == 1 && _E4_B8_8A_E7_B7_9A_E7_8B_80_E6_85_8B_E5_88_A4_E5_AE_9A__E5_85_AB_E8_B7_AF == 1) {
    await line_notify(Line_E6_AC_8A_E6_9D_96,(String(_E5_8D_80_E5_9F_9F_E5_90_8D_E7_A8_B1) + String('八路控制器-重新上線')));
    _E4_B8_8A_E7_B7_9A_E7_8B_80_E6_85_8B_E5_88_A4_E5_AE_9A__E5_85_AB_E8_B7_AF = 0;
  }

  }
}, { timezone: 'Asia/Taipei' });
