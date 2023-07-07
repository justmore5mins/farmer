#include <DHT.h>


#define dirtpin A0
const float threshold = 10; //in %
const int pump = 2;
#define dhtpin 6
#define DHTTYPE DHT11
DHT dht(dhtpin, DHTTYPE);

int ledpin[3] = {3, 4, 5};

const int drowntime = 3000; //in ms

float readdirtwet(int pin) {
  return map(map(analogRead(pin), 0, 1023, 0, 100),0,63,0,100);
}
void controlpump(bool state) {
  if (state == true) {
    digitalWrite(pump,HIGH);
  }
  else if (state == false) {
    digitalWrite(pump,LOW);
  }
}
void turnlight(bool on) {
  for (int i = 0; i < 3; i++) {
    if (on == true) {
      digitalWrite(ledpin[i], LOW);
    }
    else if (on == false) {
      digitalWrite(ledpin[i], HIGH);
    }
  }
}

void setup() {
  pinMode(ledpin[0], OUTPUT);
  pinMode(ledpin[1], OUTPUT);
  pinMode(ledpin[2], OUTPUT);
  //for mega
  pinMode(22, OUTPUT);
  digitalWrite(23, HIGH);

  turnlight(false);
  digitalWrite(ledpin[2], LOW);
  Serial.begin(115200);
  pinMode(dirtpin, INPUT);
  pinMode(pump, OUTPUT);
  dht.begin();
}

void loop() {
  turnlight(false);
  float dirtwet = readdirtwet(dirtpin);
 
    float temp = dht.readTemperature();
    float hum =  dht.readHumidity();
    Serial.print("Dirt wet: ");
    Serial.print(dirtwet);
    Serial.print(" Temperature: ");
    Serial.print(temp);
    Serial.print(" Humidity: ");
    Serial.println(hum);
 
  if (dirtwet <= threshold) {
    controlpump(true);
    delay(drowntime);
    controlpump(false);
  }
  delay(16.67);
}
