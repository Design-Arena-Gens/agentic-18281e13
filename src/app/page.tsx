/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { ArrowRight, Check, Copy, Sparkles } from "lucide-react";

const translationParagraphs = [
  "Vous avez fourni un excellent texte décrivant l'importance de la patience et la manière dont elle nourrit la prise de décision, la stabilité émotionnelle et l'atteinte des objectifs.",
  "Si la demande initiale portait sur « la réponse », ce passage constitue déjà une réponse complète à des questions telles que « Qu'est-ce que la patience ? » ou « Pourquoi la patience est-elle une qualité essentielle ? ».",
  "Voici les éléments essentiels que vous avez mis en lumière au sujet de la patience : la sérénité face aux situations stressantes, l'amélioration des décisions grâce à une pensée claire, la confiance dans le processus et le lien direct avec la paix intérieure ainsi que la réussite personnelle.",
  "Cette traduction en français reprend fidèlement le message d'origine tout en conservant le ton affirmatif qui valorise la patience comme compétence déterminante pour la santé émotionnelle et le succès durable.",
];

const keyHighlights = [
  {
    title: "Sérénité active",
    detail:
      "La patience ancre l'esprit et évite que les émotions prennent le dessus dans les moments de tension.",
  },
  {
    title: "Décisions éclairées",
    detail:
      "Elle crée l'espace nécessaire à une réflexion posée, gage de choix plus justes et durables.",
  },
  {
    title: "Confiance dans le temps",
    detail:
      "Elle rappelle que les progrès sont progressifs et qu'il faut laisser chaque étape suivre son cours.",
  },
  {
    title: "Santé émotionnelle",
    detail:
      "En réduisant l'anxiété et en cultivant la paix intérieure, la patience soutient un bien-être profond.",
  },
];

const reflectionPrompts = [
  "Dans quelles situations puis-je ralentir volontairement pour laisser la patience jouer son rôle ?",
  "Comment mesurer le lien entre ma patience et la qualité de mes décisions récentes ?",
  "Quelle routine quotidienne pourrait renforcer ma capacité à rester serein·e lorsque j'attends un résultat ?",
];

const originalText = `Question بالتأكيد، إليك ترجمة النص إلى اللغة الفرنسية:

🇫🇷 Traduction en Français
Vous avez fourni un excellent texte décrivant l'importance de la patience et ses bénéfices sur la prise de décision, le calme émotionnel et la réalisation des objectifs.
Si vous demandez "La réponse", ce que vous avez présenté est une réponse ou une description complète de "Qu'est-ce que la patience ?" ou "Pourquoi la patience est-elle une qualité importante ?"
Résumé des points essentiels que vous avez mentionnés concernant la patience :
* Sérénité : Elle aide à rester calme dans les situations stressantes.
* Amélioration de la décision : Elle mène à une pensée plus claire, à de meilleures décisions, et à éviter la précipitation.
* Confiance dans le processus : Elle enseigne la confiance que les choses ne se produisent pas immédiatement.
* Succès et Santé Émotionnelle : Elle soutient la paix intérieure et est considérée comme une compétence puissante pour atteindre le succès et la santé émotionnelle.
`;

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  return (
    <button
      type="button"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(text);
          setCopied(true);
          setTimeout(() => setCopied(false), 2500);
        } catch (error) {
          console.error("Unable to copy to clipboard", error);
        }
      }}
      className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/20 px-4 py-2 text-sm font-medium text-zinc-900 backdrop-blur transition hover:bg-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900/30"
    >
      {copied ? (
        <>
          <Check className="h-4 w-4" aria-hidden />
          Copié !
        </>
      ) : (
        <>
          <Copy className="h-4 w-4" aria-hidden />
          Copier la traduction
        </>
      )}
    </button>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-sky-50 to-emerald-50 font-sans text-zinc-900">
      <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-12 px-6 py-20 sm:px-12 lg:px-16">
        <section className="relative overflow-hidden rounded-3xl border border-white/60 bg-white/70 p-10 shadow-xl shadow-sky-100 backdrop-blur">
          <img
            src="/pattern.svg"
            alt=""
            aria-hidden
            className="pointer-events-none absolute -top-24 right-[-20%] h-[420px] w-[420px] opacity-40"
          />
          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl space-y-5">
              <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-100 px-4 py-1 text-sm font-semibold uppercase tracking-wide text-sky-800 shadow-sm">
                <Sparkles className="h-4 w-4" aria-hidden />
                Traduction enrichie
              </span>
              <h1 className="text-4xl font-semibold leading-tight text-zinc-900 sm:text-5xl">
                Patience : une force tranquille révélée en français
              </h1>
              <p className="text-lg leading-relaxed text-zinc-700">
                Retrouvez ci-dessous une version fluide et fidèle du passage
                décrivant la patience. Les points essentiels ont été clarifiés
                pour offrir une compréhension immédiate et inspirante.
              </p>
            </div>
            <CopyButton text={translationParagraphs.join("\n\n")} />
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-7">
          <div className="lg:col-span-4 space-y-4 rounded-3xl border border-white/70 bg-white/80 p-8 shadow-md shadow-indigo-100 backdrop-blur">
            <h2 className="text-2xl font-semibold text-zinc-900">
              Traduction française complète
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-zinc-700">
              {translationParagraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-6 rounded-2xl bg-emerald-100/80 p-4 text-emerald-900">
              <p className="text-sm font-medium uppercase tracking-wide">
                Message clé
              </p>
              <p className="mt-2 text-base leading-relaxed">
                La patience agit comme une boussole intérieure : elle aligne nos
                émotions, nos décisions et notre persévérance vers des objectifs
                durables.
              </p>
            </div>
          </div>

          <div className="lg:col-span-3 flex flex-col gap-6">
            <div className="rounded-3xl border border-white/70 bg-white/80 p-8 shadow-md shadow-indigo-100 backdrop-blur">
              <h3 className="text-xl font-semibold">Les piliers soulignés</h3>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-zinc-700">
                {keyHighlights.map((item) => (
                  <li
                    key={item.title}
                    className="rounded-xl border border-zinc-100 bg-white px-4 py-3 shadow-sm"
                  >
                    <p className="text-base font-semibold text-zinc-900">
                      {item.title}
                    </p>
                    <p>{item.detail}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-white/70 bg-white/80 p-8 shadow-md shadow-emerald-100 backdrop-blur">
              <h3 className="text-xl font-semibold text-emerald-950">
                Questions de réflexion
              </h3>
              <ol className="mt-4 space-y-3 text-sm leading-relaxed text-emerald-900">
                {reflectionPrompts.map((prompt, index) => (
                  <li key={prompt} className="flex items-start gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-sm font-semibold text-white">
                      {index + 1}
                    </span>
                    <span>{prompt}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-white/70 bg-white/80 p-8 shadow-md shadow-indigo-100 backdrop-blur">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-xl font-semibold text-zinc-900">
                Texte source contextualisé
              </h3>
              <p className="text-sm text-zinc-600">
                Consultez la version originale mêlant question et réponse pour
                suivre les nuances du texte de départ.
              </p>
            </div>
            <CopyButton text={originalText} />
          </div>
          <pre className="mt-6 max-h-80 overflow-y-auto rounded-2xl border border-zinc-200 bg-zinc-50 p-6 text-sm leading-relaxed text-zinc-800">
            {originalText}
          </pre>
        </section>

        <section className="flex flex-col items-start gap-6 rounded-3xl border border-zinc-200 bg-zinc-900 px-8 py-10 text-zinc-50 shadow-xl shadow-zinc-800/20">
          <div className="flex flex-col gap-3">
            <p className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wide text-emerald-300">
              <Sparkles className="h-4 w-4" aria-hidden />
              Pour aller plus loin
            </p>
            <h3 className="text-3xl font-semibold">
              Cultivez la patience au quotidien
            </h3>
            <p className="max-w-3xl text-base leading-relaxed text-zinc-200">
              Adoptez un rituel respiratoire, captez vos progrès dans un journal
              et relevez un défi personnel qui vous force à ralentir. Chaque
              pratique renforce la confiance dans le temps et solidifie la paix
              intérieure.
            </p>
          </div>
          <a
            href="https://www.psychologytoday.com/us/basics/patience"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-5 py-3 text-sm font-semibold text-emerald-950 shadow-lg shadow-emerald-500/40 transition hover:bg-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200"
          >
            Explorer des ressources
            <ArrowRight className="h-4 w-4" aria-hidden />
          </a>
        </section>
      </main>
    </div>
  );
}
