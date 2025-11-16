// src/components/Meta.jsx
import { useEffect } from "react";

function upsertMeta({ selector, attr, value, content }) {
  const found = document.head.querySelector(`${selector}[${attr}="${value}"]`);
  if (found) {
    if (selector === "link") found.href = content;
    else found.content = content;
    return found;
  }
  const el = document.createElement(selector);
  el.setAttribute(attr, value);
  if (selector === "link") el.href = content;
  else el.setAttribute("content", content);
  el.setAttribute("data-managed", "echowritings");
  document.head.appendChild(el);
  return el;
}

export default function Meta({
  title,
  description,
  url,
  image,
  keywords,
  noIndex = false,
}) {
  useEffect(() => {
    if (title) document.title = title.includes("EchoWritings") ? title : `${title} — EchoWritings`;

    if (description) upsertMeta({ selector: "meta", attr: "name", value: "description", content: description });
    if (keywords) upsertMeta({ selector: "meta", attr: "name", value: "keywords", content: keywords });

    if (url) {
      const sel = document.head.querySelector('link[rel="canonical"]');
      if (sel) sel.href = url;
      else {
        const l = document.createElement("link");
        l.setAttribute("rel", "canonical");
        l.href = url;
        l.setAttribute("data-managed", "echowritings");
        document.head.appendChild(l);
      }
    }

    // Open Graph
    if (title) upsertMeta({ selector: "meta", attr: "property", value: "og:title", content: title });
    if (description) upsertMeta({ selector: "meta", attr: "property", value: "og:description", content: description });
    if (url) upsertMeta({ selector: "meta", attr: "property", value: "og:url", content: url });
    if (image) upsertMeta({ selector: "meta", attr: "property", value: "og:image", content: image });

    // Twitter
    if (title) upsertMeta({ selector: "meta", attr: "name", value: "twitter:title", content: title });
    if (description) upsertMeta({ selector: "meta", attr: "name", value: "twitter:description", content: description });
    if (image) upsertMeta({ selector: "meta", attr: "name", value: "twitter:image", content: image });
    upsertMeta({ selector: "meta", attr: "name", value: "twitter:card", content: image ? "summary_large_image" : "summary" });

    upsertMeta({ selector: "meta", attr: "name", value: "robots", content: noIndex ? "noindex, nofollow" : "index, follow" });
  }, [title, description, url, image, keywords, noIndex]);

  return null;
}
