import { firestore } from "@/utils/firebase";

export default async function handler(req, res) {
  const { code, sub } = req.query;
  try {
    const snapshot = await firestore
      .collection("redirect_links")
      .doc(code)
      .get();

    if (snapshot.exists) {
      const data = snapshot.data();
      if (data) {
        if(sub==="nope"){
          res.redirect(
            301,
            data.uri
          );
          return;
        }
        const subUri = data.sub[sub];
        if (subUri) {
          res.redirect(
            301,
            subUri
          );
          return;
        }
        res.redirect(
          301,
          data.uri
        );
        return;
      }
    }
    // Default fallback
    res.redirect(301, "https://www.iedcbootcampcec.org");
  } catch (error) {
    console.log(error.message);
    res.status(500).redirect("https://www.iedcbootcampcec.org");
  }
}
