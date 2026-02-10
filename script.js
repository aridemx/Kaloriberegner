function kalkuler() {
  const kjonn = document.getElementById("kjonn").value;
  const alder = Number(document.getElementById("alder").value);
  const hoyde = Number(document.getElementById("hoyde").value);
  const vekt = Number(document.getElementById("vekt").value);
  const okter = Number(document.getElementById("okter").value);
  const aktivitet = document.getElementById("aktivitet").value;
  const mal = Number(document.getElementById("mal").value);

  if (!alder || !hoyde || !vekt || !mal) {
    alert("Fyll inn alle felt");
    return;
  }

  // BMR – Mifflin-St Jeor
  let bmr;
  if (kjonn === "mann") {
    bmr = 10 * vekt + 6.25 * hoyde - 5 * alder + 5;
  } else {
    bmr = 10 * vekt + 6.25 * hoyde - 5 * alder - 161;
  }

  // Aktivitetsfaktor
  let faktor = aktivitet === "stillesittende" ? 1.2 : 1.35;
  faktor += Math.min(okter * 0.05, 0.25);

  // Vedlikehold (TDEE)
  const tdee = bmr * faktor;

  // Moderat underskudd (18 %)
  const inntak = tdee * 0.82;

  // Fettap per uke (kjønnsjustert)
  const fettPerUke = kjonn === "mann"
    ? vekt * 0.006   // 0,6 % per uke
    : vekt * 0.005;  // 0,5 % per uke

  // Tid til mål
  const uker = mal / fettPerUke;

  // Output
  document.getElementById("resultat").innerHTML = `
    <h2>Resultat</h2>
    <p><strong>Vedlikehold:</strong> ${Math.round(tdee)} kcal/dag</p>
    <p><strong>Anbefalt inntak:</strong> ${Math.round(inntak)} kcal/dag</p>
    <p><strong>Estimert fettap:</strong> ${fettPerUke.toFixed(2)} kg/uke</p>
    <p><strong>Tid til mål:</strong> ca. ${Math.ceil(uker)} uker</p>
    <p style="font-size:0.9em;color:#555;">
      Raskere tempo kan øke risiko for tap av muskelmasse og redusert prestasjon.
    </p>
  `;
}
