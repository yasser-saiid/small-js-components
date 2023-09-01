const textData = [
  "I'm baby coloring book leggings heirloom tousled succulents hammock 8-bit biodiesel. Man braid readymade yr flannel direct trade. Jean shorts gatekeep coloring book, pabst bodega boys activated charcoal green juice chicharrones umami subway tile. Ennui kitsch activated charcoal franzen gluten-free marfa ugh, biodiesel jean shorts sustainable banh mi crucifix.",
  'Cardigan grailed selvage knausgaard, yr seitan tattooed jean shorts drinking vinegar green juice. Jean shorts humblebrag direct trade blog. Cardigan asymmetrical bespoke, gochujang JOMO neutra aesthetic ugh biodiesel. Listicle YOLO butcher vibecession venmo aesthetic gatekeep air plant. Narwhal four loko DIY before they sold out. Kale chips stumptown fingerstache vaporware, affogato intelligentsia salvia godard mixtape unicorn synth tousled before they sold out blackbird spyplane JOMO. Small batch man braid gatekeep williamsburg leggings mumblecore single-origin coffee.',
  'Kitsch tumeric pitchfork single-origin coffee put a bird on it post-ironic raclette pinterest franzen same meggings slow-carb squid. Gastropub post-ironic vice man bun quinoa tote bag. Organic kogi church-key next level man braid post-ironic pitchfork prism put a bird on it mukbang dreamcatcher vegan blog. Salvia taiyaki subway tile cardigan microdosing. Heirloom keytar semiotics tumeric, sriracha taiyaki food truck. Lyft kombucha Brooklyn yes plz health goth. Shaman JOMO coloring book, vexillologist marfa shabby chic venmo retro poke etsy.',
  'Tumblr umami seitan unicorn shaman aesthetic cornhole, green juice trust fund artisan organic disrupt tacos. Man bun readymade bitters gentrify fingerstache cred yr photo booth sustainable. Brooklyn yuccie pitchfork shaman, bitters pop-up messenger bag. Cupping blog pabst PBR&B, synth crucifix retro tumeric swag kogi etsy meh. Williamsburg brunch polaroid, vibecession tousled man braid succulents health goth food truck kogi iceland helvetica. Crucifix cred praxis, hoodie umami food truck dreamcatcher salvia same kinfolk quinoa cupping palo santo tumblr pinterest. Yes plz viral umami selvage everyday carry cronut shabby chic Brooklyn master cleanse humblebrag bushwick blackbird spyplane.',
  '3 wolf moon church-key quinoa, messenger bag fashion axe sartorial biodiesel. Vibecession pour-over umami jean shorts readymade lomo drinking vinegar mustache humblebrag yr ennui cliche blue bottle snackwave. Hell of tbh letterpress bespoke ethical. Tumblr humblebrag meditation shaman.',
  'Leggings fashion axe vexillologist literally schlitz gentrify knausgaard praxis. Master cleanse scenester affogato, narwhal microdosing DIY cornhole. Keffiyeh post-ironic vape aesthetic squid hella yes plz celiac cupping. Kitsch synth semiotics celiac, DSA yr chambray portland yes plz. DIY +1 poke subway tile poutine. Wolf hexagon keytar twee pop-up.',
  'Single-origin coffee humblebrag swag marfa. XOXO mixtape gentrify, readymade pour-over yes plz big mood farm-to-table franzen live-edge bitters occupy. Selvage scenester letterpress franzen. Before they sold out keffiyeh gorpcore, vape marxism craft beer neutra farm-to-table cold-pressed. Keffiyeh tbh thundercats vegan lo-fi gorpcore Brooklyn normcore messenger bag XOXO hoodie.',
  'Gastropub polaroid squid chicharrones pok pok, biodiesel unicorn. Blackbird spyplane drinking vinegar DIY, fam normcore la croix asymmetrical tattooed. Whatever hella banjo ennui, tonx polaroid JOMO slow-carb williamsburg enamel pin mukbang blog poutine. Sriracha plaid viral keffiyeh bitters, meh pork belly migas organic.',
  'Selvage af thundercats twee photo booth locavore. Bitters grailed food truck meggings enamel pin copper mug bruh occupy vinyl asymmetrical tumeric. Echo park 90"s taxidermy hoodie waistcoat lo-fi. Kitsch twee bicycle rights, cardigan vice blackbird spyplane air plant fit plaid food truck tumblr coloring book cray. Normcore JOMO bicycle rights seitan fit synth marxism pour-over fashion axe truffaut jawn.',
]

const form = document.querySelector('.form')
const input = document.querySelector(".form input[type='number'] ")
const textWrapper = document.querySelector('.text-wrapper')
const alertText = document.querySelector('.alert')

form.addEventListener('submit', function (evt) {
  evt.preventDefault()
  const textAmount = parseInt(input.value)
  if (
    isNaN(textAmount) ||
    textAmount <= 0 ||
    textAmount > textData.length - 1
  ) {
    alertText.style.display = 'block'
    input.style.borderColor = '#842029'
  } else {
    let template = textData.slice(0, textAmount)
    template = template
      .map(function (textItem) {
        return `<p class="text">${textItem}</p>`
      })
      .join('')
    textWrapper.innerHTML = template
  }
  setTimeout(function () {
    alertText.style.display = 'none'
    input.style.borderColor = 'initial'
    input.value = ''
  }, 1500)
})
