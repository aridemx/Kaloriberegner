function kalkuler() {
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

  const bmr = 10 * vekt + 6.25 * hoyde - 5 * alder + 5;

  let faktor = aktivitet === "stillesittende" ? 1.2 : 1.35;
  faktor += Math.min(okter * 0.05, 0.25);

  const tdee = bmr * faktor;
  const inntak = tdee * 0.82;

  const fettPerUke = vekt * 0.006;
  const uker = mal / fettPerUke;

  document.getElementById("resultat").innerHTML = `
    <h2>Resultat</h2>
    <p>Vedlikehold: <strong>${Math.round(tdee)} kcal/dag</strong></p>
    <p>Anbefalt inntak: <strong>${Math.round(inntak)} kcal/dag</strong></p>
    <p>Estimert fettap: <strong>${fettPerUke.toFixed(2)} kg/uke</strong></p>
    <p>Tid til mål: <strong>${Math.ceil(uker)} uker</strong></p>
  `;
}
