#include "sensors.h"
#include "SimpleDHT.h"

void DHTsensor::readTemp(int DHTpin){
  SimpleDHT11 dht11;
  float Temp;
  int err = SimpleDHTErrSuccess;
  
}