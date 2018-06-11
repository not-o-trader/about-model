drop table accprev;
drop table brakes;
drop table comfort;
drop table convenience;
drop table entertainment;
drop table package;
drop table safety;
drop table seat;
drop table specs;
drop table vehicles;

create table vehicles (
  id int primary key,
  specs int,
  safety int,
  accprev int,
  brakes int,
  comfort int,
  convenience int,
  entertainment int,
  package int,
  seat int
);

create table specs (
  id int primary key,
  car_id int,
  fuelCapacity numeric,
  engineType varchar(25),
  horsepower varchar(25),
  torque varchar(25),
  tires	 varchar(25),
  rimSize	 varchar(25),
  rims varchar(25),
  spareTire	 varchar(25),
  frontHeadroom 	numeric,
  frontLegroom numeric,
  lockingDiff	 boolean,
  maxTow int,
  drivenWheels varchar(10),
  curbWeight int,
  wheelbase 	numeric,
  height numeric,
  seating	 int,
  rearHeadroom numeric,
  rearLegroom numeric
);

create table safety (
  id int primary key,
  car_id int,
  rollover numeric,
  drCrash numeric,
  psCrash numeric,
  sCrashFront numeric,	
  sCrashRear numeric
);

create table accprev (
  id int primary key,
  car_id int,
  drAirBag varchar(5),
  psAirBag varchar(5),
  sideAirBag varchar(5),
  sideHeadAirBag varchar(5),
  rearSideAB varchar(5),
  vehAlarm varchar(5),
  abs4 varchar(5),
  rearDefrost varchar(5),
  chSafetyLocks varchar(5),
  dayRunLights varchar(5),
  tracControl varchar(5),
  antiTheft varchar(5),
  turnSigMirrors varchar(5),
  parkAssist varchar(5),
  trunkRelease varchar(5),
  frTowHooks varchar(5),
  tpms varchar(5),
  bluetooth varchar(5),
  telematics varchar(5),
  rearCamera varchar(5),
  stabilityCtrl varchar(5),
  rearBAirBag	varchar(5),
  alarmSys varchar(5),
  rearSpoiler varchar(5)
);

create table brakes (
  id int primary key,
  car_id int,
  abs4 Boolean,
  disc4 Boolean
);

create table comfort (
  id int primary key,
  car_id int,
  climateCtrl varchar(5),
  dualClimate varchar(5),
  airCond varchar(5),
  leatherSeats varchar(5),
  frBucketSeats varchar(5),
  drLumbar varchar(5),
  psLumbar varchar(5),
  leatherWheel varchar(5),
  bluetooth varchar(5),
  telematics varchar(5),
  pwrSunroof varchar(5),
  sunroof varchar(5),
  heatedSeat varchar(5)
);

create table convenience (
  id int primary key,
  car_id int,
  cruiseCtrl varchar(5),
  frFloorMats varchar(5),
  heatMirrors varchar(5),
  powerDrMirror varchar(5),
  powerDrSeat varchar(5),
  powerPasSeat varchar(5),
  rearPassThru varchar(5),
  powerSteering varchar(5),
  adjSteerWheel varchar(5),
  powerWindows varchar(5),
  intWipers varchar(5),
  stWheelCtrls varchar(5),
  autoOffHdlight varchar(5),
  autoDimRMirror varchar(5),
  drVanityMirror varchar(5),
  psVanityMirror varchar(5),
  illumDriverVM varchar(5),
  illumPassVM varchar(5),
  mirrorMemory varchar(5),
  parkAssist varchar(5),
  seatMemory varchar(5),
  rmTrunkOpen varchar(5),
  uniGarageDoor varchar(5),
  rmEngineStart varchar(5),
  keylessStart varchar(5),
  navSystem varchar(5),
  varSpIntWipers varchar(5),
  rainSenseWprs varchar(5),
  wheelLocks varchar(5)
);

create table entertainment (
  id int primary key,
  car_id int,
  amFmStereo varchar(5),
  premSound varchar(5),
  satRadio varchar(5),
  mp3Player varchar(5),
  auxAudioInput varchar(5)
);

create table package (
  id int primary key,
  car_id int,
  sideAirBag varchar(5),
  rearBodyAirBag varchar(5),
  alarmSystem varchar(5),
  navSystem varchar(5),
  perfTires varchar(5),
  alumWheels varchar(5),
  intWipers varchar(5),
  woodIntTrim varchar(5),
  rearSpoiler varchar(5)
);

create table seat (
  id int primary key,
  car_id int,
  leatherSeats varchar(5),
  frBucketSeats varchar(5),
  heatedSeat varchar(5)
);

\copy accprev from 'sampledata/accprev.csv' csv header;
\copy brakes from 'sampledata/brakes.csv' csv header;
\copy comfort from 'sampledata/comfort.csv' csv header;
\copy convenience from 'sampledata/convenience.csv' csv header;
\copy entertainment from 'sampledata/entertainment.csv' csv header;
\copy package from 'sampledata/package.csv' csv header;
\copy safety from 'sampledata/safety.csv' csv header;
\copy seat from 'sampledata/seat.csv' csv header;
\copy specs from 'sampledata/specs.csv' csv header;
\copy vehicles from 'sampledata/vehicles.csv' csv header;