// Librarys
#include <WiFi.h>
#include <HTTPClient.h>
#include <Arduino_JSON.h>


#include <LiquidCrystal_I2C.h>
#include <Wire.h>

#define LCD_SDA  21
#define LCD_SCL  14
LiquidCrystal_I2C lcd(0x27,2,1,0,4,5,6,7,3, POSITIVE);




// WIFI info
const char* ssid = "Inteli-COLLEGE";
const char* password = "QazWsx@123";

//Your Domain name with URL path or IP address with path
String serverName = "https://kvd3ho-3008.preview.csb.app/vencedor";

unsigned long lastTime = 0;

unsigned long timerDelay = 5000;


void setup() {

  Wire.begin(LCD_SDA, LCD_SCL);
  lcd.begin (16,2);
 


  Serial.begin(115200);

  WiFi.begin(ssid, password);

  Serial.println("Connecting");

  while(WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }

  Serial.println("");
  Serial.print("Connected to WiFi network with IP Address: ");
  Serial.println(WiFi.localIP());
  Serial.println("Timer set to 5 seconds (timerDelay variable), it will take 5 seconds before publishing the first reading.");
}
void loop() {
  //Send an HTTP POST request every 10 minutes
  if ((millis() - lastTime) > timerDelay) {
    //Check WiFi connection status
    if(WiFi.status() == WL_CONNECTED){
      HTTPClient http;
      String serverPath = serverName;
      // Your Domain name with URL path or IP address with path
      http.begin(serverPath.c_str());

      // Send HTTP GET request
      int httpResponseCode = http.GET();
      if (httpResponseCode>0) {

        String payload = http.getString();
        Serial.println(payload);

        JSONVar myObject = JSON.parse(payload);
        JSONVar keys = myObject.keys();

        int winStatus = myObject["vencedor"];

        Serial.println(winStatus);


        if(winStatus == 0) {
          Serial.print("time branco venceu");
          lcd.setBacklight(HIGH);
          lcd.setCursor(0,1);
          lcd.print("Time branco venceu!");
        } else {
          Serial.print("time preto venceu");
          lcd.setBacklight(HIGH);
          lcd.setCursor(0,1);
          lcd.print("Time preto venceu!");
        }
      }



      
      else {
        Serial.print("Error code: ");
        Serial.println(httpResponseCode);
      }
      http.end();
    }
    else {
      Serial.println("WiFi Disconnected");
    }
    lastTime = millis();
  }
}