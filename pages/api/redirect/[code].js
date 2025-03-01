import { firestore } from "@/utils/firebase";

export default async function handler(req, res) {
  const { code } = req.query;
  try {
    const snapshot = await firestore
      .collection("redirect_links")
      .doc(code)
      .get();
    if (!snapshot.exists){
        res.redirect(301,"https://www.iedcbootcampcec.org");
        return;
    }
    const data = snapshot.data();
    if (!data.uri){
        res.status(404).redirect("https://www.iedcbootcampcec.org");
        return;
    }
    res.redirect(301, data.uri);
  } catch (error) {
    res.status(500).redirect("https://www.iedcbootcampcec.org");
  }
}
