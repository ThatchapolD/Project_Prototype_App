//Import React Stuff
import { View, Text, StyleSheet, Image, ActivityIndicator } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

//Import Redux slicer
import { useSelector } from "react-redux";

//Importing Style Color
import { GlobalColor } from "../style/Color";

//Importing BN Info components
import Banknotes_Info from "../components/Banknotes_Info";

//Importing UI
import Card from "../UI/Card";

//Importing Banknotes DB
import Thai_Cir_DB from "../assets/Banknotes_DB/Thai_DB/TH_Circulated_DB";
import Eng_Cir_DB from "../assets/Banknotes_DB/Eng_DB/ENG_Circulated_DB";

const Result = () => {
  const uploadStatus = useSelector((state) => state.uploadState.status);
  const language = useSelector((state) => state.language.languageState);
  const imageUri = useSelector((state) => state.imageStorage.imageUri);
  const BanknoteID = useSelector(
    (state) => state.banknoteResultStorage.banknoteID,
  );
  const Serial_Number = useSelector(
    (state) => state.banknoteResultStorage.Serial_Number,
  );
  const MF_Sig = useSelector((state) => state.banknoteResultStorage.MF_Sig);
  const BOT_Sig = useSelector((state) => state.banknoteResultStorage.BOT_Sig);

  const navigation = useNavigation();

  useEffect(() => {
    if (language === "Thai") {
      navigation.setOptions({ title: "ผลลัพท์" });
    } else {
      navigation.setOptions({ title: "Result" });
    }
  }, [language]);

  if (uploadStatus === 2) {
    return (
      <View style={styles.Banknotes_Info_Container}>
        <Card>
          <Image
            source={{
              uri: imageUri,
            }}
            style={{ width: 300, height: 300 }}
          />
        </Card>
        {BanknoteID === "Can't detect Banknotes" ? (
          <Card>
            <Text style={styles.text}>
              {language === "Thai"
                ? "ไม่พบเจอธันบัตร"
                : "Can't Detect Banknotes"}
            </Text>
          </Card>
        ) : (
          <Banknotes_Info
            Series={
              language === "Thai"
                ? Thai_Cir_DB[BanknoteID].Series
                : Eng_Cir_DB[BanknoteID].Series
            }
            Date={
              language === "Thai"
                ? Thai_Cir_DB[BanknoteID].Date
                : Eng_Cir_DB[BanknoteID].Date
            }
            MF_Sig={language === "Thai" ? MF_Sig : MF_Sig}
            BOT_Sig={language === "Thai" ? BOT_Sig : BOT_Sig}
            Serial_Number={Serial_Number}
            Amount={
              language === "Thai"
                ? Thai_Cir_DB[BanknoteID].Amount
                : Eng_Cir_DB[BanknoteID].Amount
            }
            Price={
              language === "Thai"
                ? Thai_Cir_DB[BanknoteID].Price
                : Eng_Cir_DB[BanknoteID].Price
            }
            Aritistic={
              language === "Thai"
                ? Thai_Cir_DB[BanknoteID].Aritistic
                : Eng_Cir_DB[BanknoteID].Aritistic
            }
          />
        )}
      </View>
    );
  } else if (uploadStatus === 1) {
    return (
      <View style={styles.container}>
        <Card>
          <View>
            <Text style={styles.text}>
              {language === "Eng" ? "Waiting..." : "โปรดรอสักครู่"}
              <ActivityIndicator
                size="large"
                color={GlobalColor.colors.accent100}
              />
            </Text>
          </View>
        </Card>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Card>
        {language === "Eng" ? (
          <Text style={styles.text}>Please upload a picture</Text>
        ) : (
          <Text style={styles.text}>ท่านยังไม่ได้ทำการอัปโหลดรูป</Text>
        )}
      </Card>
    </View>
  );
};

export default Result;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalColor.colors.primary10,
    alignItems: "center",
    justifyContent: "center",
  },

  Banknotes_Info_Container: {
    flex: 1,
    backgroundColor: GlobalColor.colors.primary10,
  },

  text: {
    color: "white",
    fontSize: 16,
  },
});
