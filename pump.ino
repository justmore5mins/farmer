#include <DHT.h>


#define dirtpin A0
const float threshold = 40; //in %
const int pump = 2;
int pumpcheck;
#define dhtpin 6
#define DHTTYPE DHT11
DHT dht(dhtpin, DHTTYPE);

int ledpin[3] = {3, 4, 5};

const int drowntime = 1000; //in ms

float readdirtwet(int pin) {
  return map(map(analogRead(pin), 0, 1023, 0, 100), 0, 63, 0, 100);
}
void controlpump(bool state) {
  if (state == true) {
    digitalWrite(ledpin[0], LOW);
    digitalWrite(ledpin[1], LOW);
  }
  else if (state == false) {
    digitalWrite(ledpin[0], HIGH);
    digitalWrite(ledpin[1], HIGH);
  }
}

void begin() {

  /*
    if(readdirtwet == 0){
    Serial.println("Dirt wet sensor error");
    }
  */
  digitalWrite(pump, HIGH);
  if (digitalRead(pumpcheck) == HIGH) {
    Serial.println("relay error");
    digitalWrite(ledpin[0], HIGH);
  }
  digitalWrite(pump, LOW);
}

void turnlight(bool on) {
  for (int i = 0; i < 2; i++) {
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
  /*
    float temp = dht.readTemperature();
    float hum =  dht.readHumidity();
    Serial.println("Dirt wet: ");
    Serial.println(dirtwet);
    Serial.print("Temperature: ");
    Serial.println(temp);
    Serial.print("Humidity: ");
    Serial.println(hum);
    Serial.println("================================");
  */
  Serial.println(dirtwet);
  if (dirtwet <= threshold) {
    controlpump(true);
    delay(drowntime);
    controlpump(false);
  }
  delay(1);
}
