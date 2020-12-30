////STATE / RUNTIME VARS
var BALUSTER = "B2915";
var NEWEL = "2011";
var HANDRAIL = "";

var SELECTED_BALUSTER_ID = 0;
var SELECTED_BALUSTER_ITEM;

var SELECTED_NEWEL_ID = 0;
var SELECTED_NEWEL_ITEM;

var SELECTED_HANDRAIL_ID = 0;
var SELECTED_HANDRAIL_ITEM;

var newels = [];
var balusters = [];
var handrails = [];
var MATERIAL = 0;
var STATE = 0;

////ASSETS VARS

var balustersTopWood = [
  'B2915',  'F2915',  'P2915', '2111',  'P2115',
  'T2015',  'F2015',  'P2015', '53008', '5300',
  '5370',   'F5370',  '2011',  '5015',  '5035',
  '5040',   '5200',   '5070',  'F5070', 'B2905',
  'F2905',  'P2905',  'F2105', 'P2105', 'P20058',
  'T2005',  'F2005',  'P2005', '50058', '5005',
  '5004',   '5067',   '5141',  '5360',  'F5360',
  'C5360',  '5060',   'F5060', 'C5060', '5060V',
  'C5060V', '5360V',  '5090',  'F2115', 'F5060V',
  'F5360V', 'P20158', '5360V'
];


var balustersTopIron = [
  '13144sb',        '9044sb',       'HOLPLA44sb',
  'WAVE44sb',       '10044sb',      '13044sb',
  '11044sb',        '30544sb',      '30844sb',
  '31044sb',        'HOL14044',     'HOL14344sb',
  '33044sb',        '13244sb',      '14044sb',
  '14344sb',        '15044sb',      '16044sb',
  '61144sv',        '2bask44sb',    '1RIB44sb',
  '40144sb',        '1bask44sb',    '2tw44sb',
  '60044sb',        '40244sb',      '1knuc44sb',
  '2rib44sb',       '2knuc44sb',    '8044sb',
  '2knuc1bask44sb', '8544sb',       '61244sv',
  'HOL16044sb',     'HOL65044sb',   'HOL65144sb',
  'HOL65244sb',     'HOL65344',     'HOL15044sb',
  '1tw44sb',        'HOL1bask44sb', 'HOL2bask44',
  'HOL1knuc44sb',   'HOL2knuc44',   'HOLPLA44sb',
  'HOL1tw44sb',     'HOL2tw44sb',   'KW1bask44sb',
  'KW2bask44sb',    'KW1tw44sb',    'KW1knuc44sb',
  'KW2knuc44sb',    'KW2tw44sb',    'MG1bask44sb',
  'MG1knuc44sb',    'MG1tw44sb',    'MG2bask44sb',
  'MG2knuc44sb',    'MG2tw44sb',    'MGPLA44sb',
  'Dbltw44sb',      'Dbltw44sb'
];


var balustersOverWood = [
  'B2915',  'F2915', 'P2915',  '2111',
  'P2115',  'T2015', 'F2015',  'P2015',
  '53008',  '5300',  '2011',   '5015',
  '5035',   '5040',  '5200',   'B2905',
  'F2905',  'P2905', 'F2105',  'P2105',
  'P20058', 'T2005', 'F2005',  'P2005',
  '50058',  '5005',  '5004',   '5067',
  '5141',   'F2115', 'P20158'
];


var balustersOverIron = [
  '13144sb',        '9044sb',       'HOLPLA44sb',
  'WAVE44sb',       '10044sb',      '13044sb',
  '11044sb',        '30544sb',      '30844sb',
  '31044sb',        'HOL14044',     'HOL14344sb',
  '33044sb',        '13244sb',      '14044sb',
  '14344sb',        '15044sb',      '16044sb',
  '61144sv',        '2bask44sb',    '1RIB44sb',
  '40144sb',        '1bask44sb',    '2tw44sb',
  '60044sb',        '40244sb',      '1knuc44sb',
  '2rib44sb',       '2knuc44sb',    '8044sb',
  '2knuc1bask44sb', '8544sb',       '61244sv',
  'HOL16044sb',     'HOL65044sb',   'HOL65144sb',
  'HOL65244sb',     'HOL65344',     'HOL15044sb',
  '1tw44sb',        'HOL1bask44sb', 'HOL2bask44',
  'HOL1knuc44sb',   'HOL2knuc44',   'HOLPLA44sb',
  'HOL1tw44sb',     'HOL2tw44sb',   'KW1bask44sb',
  'KW2bask44sb',    'KW1tw44sb',    'KW1knuc44sb',
  'KW2knuc44sb',    'KW2tw44sb',    'MG1bask44sb',
  'MG1knuc44sb',    'MG1tw44sb',    'MG2bask44sb',
  'MG2knuc44sb',    'MG2tw44sb',    'MGPLA44sb',
  'Dbltw44sb',      'Dbltw44sb'
];




var newelsTopWood = [
  'B3940',   'P3940',   '4091',
  'F4091',   'RC4091',  'RA4091',
  '4075_50', '4175_50', '4092',
  '4093',    '4094',    '4095',
  '4096',    '4097',    '4392',
  '4393',    '4394',    '4395',
  '4396',    '4397',    '4391'
];


var newelsTopIron = [
  'B3940',   'F3040',   '45008',   '4500',
  '4500COL', '4600',    '4004',    '4004RT',
  '4004COL', '4004SCR', '4104BT',  '4180',
  '4150',    '4900',    '4040',    '4040BT',
  '4000',    'C4000',   '4110',    'c4110',
  '4091',    '4075_50', '4175_50', '4092',
  '4093',    '4094',    '4095',    '4096',
  '4097',    '4392',    '4393',    '4394',
  '4395',    '4396',    '4397',    '4391'
];


var newelsOverWood = [
  'B3910',
  'P3910',
  'NWLbask48sb',
  'NWLTW48sb',
  'NWLRIB48sb',
  'NWL14048sb'
];


var newelsOverIron = [
  '3513PT',      '4013pt',
  'B3910',       'F3910',
  'P3910',       'F3310',
  'F3210',       'P3310',
  'P3210',       'P30108',
  'F3010',       'P3010',
  '42708',       '4270',
  '3270',        '4010',
  '4050',        '4060',
  'NWLbask48sb', 'NWLTW48sb',
  'NWLRIB48sb'
];


var handrailsTopWood = [
  '6109', '6210',
  '6400', '6519',
  '6701', '6900',
  '6A10', '6B10',
];


var handrailsTopIron = [
  '6701', '6900', '6A10',
  '6B10', '6010', '6601',
  '6002', '6003', '6109',
  '6203', '6210', '6519',
  '6400'
];


var handrailsOverWood = [ 
  '6109P1', '6210P', '6400P',
  '6900P', '6A10P1', '6B10P1'
];


var handrailsOverIron = [
  '6701', '6900',
  '6A10', '6B10',
  '6010', '6601',
  '6109', '6210',
  '6519', '6400'
];




