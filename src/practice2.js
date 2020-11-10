const inject =  (items, sections) => {
    sections.map((section, i) => {
        items.splice(section.index + i, 0, section.content)
    })
    return items;
}

export { inject };
