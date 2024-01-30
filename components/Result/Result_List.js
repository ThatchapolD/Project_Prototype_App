//Import React Stuff
import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

//Import Redux slicer
import { useSelector } from "react-redux";

//Importing Style Color
import { GlobalColor } from "../../style/Color";

//Importing BN Info components
import Banknotes_Info from "../Banknotes_Info";

//Importing UI
import Card from "../../UI/Card";

//Importing Banknotes DB
import Thai_DB from "../../assets/Banknotes_DB/TH_Banknotes_DB";
import Eng_DB from "../../assets/Banknotes_DB/ENG_Banknotes_DB";

const Result_List = () => {
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
            {language === "Thai" ? "ไม่พบเจอธันบัตร" : "Can't Detect Banknotes"}
          </Text>
        </Card>
      ) : (
        <Banknotes_Info
          Series={
            language === "Thai"
              ? Thai_DB[BanknoteID].Series
              : Eng_DB[BanknoteID].Series
          }
          Date={
            language === "Thai"
              ? Thai_DB[BanknoteID].Date
              : Eng_DB[BanknoteID].Date
          }
          MF_Sig={language === "Thai" ? MF_Sig : MF_Sig}
          BOT_Sig={language === "Thai" ? BOT_Sig : BOT_Sig}
          Serial_Number={Serial_Number}
          Amount={
            language === "Thai"
              ? Thai_DB[BanknoteID].Amount
              : Eng_DB[BanknoteID].Amount
          }
          Price={
            language === "Thai"
              ? Thai_DB[BanknoteID].Price
              : Eng_DB[BanknoteID].Price
          }
          Aritistic={
            language === "Thai"
              ? Thai_DB[BanknoteID].Artistic
              : Eng_DB[BanknoteID].Artistic
          }
        />
      )}
    </View>
  );
};

export default Result_List;

const styles = StyleSheet.create({
  Banknotes_Info_Container: {
    flex: 1,
    backgroundColor: GlobalColor.colors.primary10,
  },

  text: {
    color: "white",
    fontSize: 16,
  },
});
