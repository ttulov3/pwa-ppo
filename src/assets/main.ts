import templatePagina1 from "bundle-text:../template/pagina1/pagina1.html"
import templatePagina2 from "bundle-text:../template/pagina2/pagina2.html"

const main = <HTMLElement>document.querySelector("main")

const paginas = {
    "pagina1": templatePagina1,
    "pagina2": templatePagina2
}

main.innerHTML = templatePagina1

main.addEventListener("click", ev => {
    const host = ev.target as HTMLElement
    const target = host.closest("[data-open]") as HTMLElement
    if (!target) return
    const open = target.dataset.open
    if (!open) return
    main.innerHTML = paginas[open]
})