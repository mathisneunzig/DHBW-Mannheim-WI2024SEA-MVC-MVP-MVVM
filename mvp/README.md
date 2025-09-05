# DHBW-Mannheim-WI2023SEB-MVP

**Model**:
- Datenquelle und Geschäftslogik

**View**:
- Anzeige und Benutzerinteraktion

**Presenter**:
- Enthält die Logik, kommuniziert mit Model & View

**Architektur-Erklärung:**
- Presenter steuert die View aktiv und ruft Model-Daten ab.
- Vorteil: Testbarkeit, View ist „dumm“ und leicht austauschbar.