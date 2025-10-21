## Git-praktik

_Igår var det den 20 oktober och idag är det den 21 oktober. Jag fokuserar på att lära mig Git och GitHub._

Jag kollade på en video (1h 25min) från min lärare på Medieinstitutet, **Jenni Litoreus**.

Jag ska skriva här nedanför vad jag förstår.

---

### 1. Skillnaden mellan Git och GitHub

**Git**: Ett program du har på din dator för att spara kodhistorik (offline).  
**GitHub**: En webbplats där du kan ladda upp dina Git-projekt (online) och dela dem med andra.

**Tänk så här:**

1. **Git** = din dator
2. **GitHub** = internet

---

### Kommandon som används mest

#### 1. `git init`

> Startar ett nytt Git-projekt i en mapp.  
> Efter det skapas en dold mapp som heter **.git**, där all historik sparas.

#### 2. `git add`

> Förbereder filer för att sparas (packa lådan).  
> **Du säger:** “Git, jag vill spara dessa filer.”

#### 3. `git commit`

> Sparar ändringarna med ett meddelande (lägg lådan i arkivet med en etikett).

---

### Skillnaden mellan `git add` och `git commit`

| Kommando     | Vad det gör                           | När du använder det       |
| ------------ | ------------------------------------- | ------------------------- |
| `git add`    | Förbereder filer för att sparas       | Efter att du ändrat filer |
| `git commit` | Sparar ändringarna med ett meddelande | Efter `git add`           |
