import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import ReactPDF from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
  },
  text: {
    margin: 10,
    padding: 10,
  },
});
const MyDocument = ({ text }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.text}>{text}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.text}></Text>
      </View>
    </Page>
  </Document>
);
export default MyDocument;
