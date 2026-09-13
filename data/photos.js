/* =============================================================================
   photos.js — 摄影作品。

   每张照片两行说明：
       Firefall              ← title，斜体
       Yosemite, Winter 2025 ← place，正常字体

   title / place 已由 Nicole 逐张确认过。
   数组顺序 = 页面顺序，现在是从新到旧。

   加新照片：丢进 assets/img/photos/ → 跑 python3 tools/optimize_photos.py
   ========================================================================== */

const PHOTO_TAGS = ["All", "Landscape", "Coast", "Desert", "Wildlife", "Flora", "City"];

const P = "assets/img/photos/";
const T = "assets/img/photos/thumbs/";

const PHOTOS = [
  {
    src: P + "hydrangea-bench-summer-2026.jpg", thumb: T + "hydrangea-bench-summer-2026.jpg",
    ratio: 0.833,
    title: "Hydrangea Bench", place: "Filoli Garden, Bay Area, Summer 2026",
    alt: "A weathered wooden bench half-swallowed by a hydrangea bush in full bloom",
    tags: ["Flora"]
  },
  {
    src: P + "mt-hood-portland-spring-2026.jpg", thumb: T + "mt-hood-portland-spring-2026.jpg",
    ratio: 0.75,
    title: "Mt Hood", place: "Portland, Spring 2026",
    alt: "Mount Hood on the horizon, framed by dark pine branches",
    tags: ["Landscape"]
  },
  {
    src: P + "haul-out-spring-2026.jpg", thumb: T + "haul-out-spring-2026.jpg",
    ratio: 0.75,
    title: "Haul Out", place: "La Jolla, San Diego, Spring 2026",
    alt: "Sea lions and cormorants crowded together on a rocky islet",
    tags: ["Wildlife", "Coast"]
  },
  {
    src: P + "cherry-blossom-spring-2026.jpg", thumb: T + "cherry-blossom-spring-2026.jpg",
    ratio: 0.75,
    title: "Cherry Blossom", place: "Washington DC, Spring 2026",
    alt: "Pink cherry blossoms hanging over a pale railing",
    tags: ["Flora"]
  },
  {
    src: P + "watching-the-fog-winter-2026.jpg", thumb: T + "watching-the-fog-winter-2026.jpg",
    ratio: 1.5,
    title: "Watching the Fog", place: "Point Reyes, Winter 2026",
    alt: "A lone figure silhouetted on a hillside above the ocean at dusk",
    tags: ["Coast"]
  },
  {
    src: P + "golden-gate-winter-2026.jpg", thumb: T + "golden-gate-winter-2026.jpg",
    ratio: 0.666,
    title: "Golden Gate", place: "San Francisco, Winter 2026",
    alt: "The Golden Gate Bridge tower rising above traffic on a clear day",
    tags: ["City"]
  },
  {
    src: P + "sea-cave-winter-2026.jpg", thumb: T + "sea-cave-winter-2026.jpg",
    ratio: 0.666,
    title: "Sea Cave", place: "Point Reyes, Winter 2026",
    alt: "Elephant seals resting on a small beach below pale cliffs, beside the mouth of a sea cave",
    tags: ["Coast"]
  },
  {
    src: P + "red-rocks-winter-2025.jpg", thumb: T + "red-rocks-winter-2025.jpg",
    ratio: 1.5,
    title: "Red Rocks", place: "Sedona, Winter 2025",
    alt: "Layered red sandstone cliffs rising behind a small town",
    tags: ["Desert"]
  },
  {
    src: P + "badlands-winter-2025.jpg", thumb: T + "badlands-winter-2025.jpg",
    ratio: 1.5,
    title: "Banded Earth", place: "Petrified Forest, Winter 2025",
    alt: "Bare eroded badlands in grey and rust, ridge after ridge to the horizon",
    tags: ["Desert"]
  },
  {
    src: P + "banded-earth-winter-2025.jpg", thumb: T + "banded-earth-winter-2025.jpg",
    ratio: 1.5,
    title: "Banded Earth 2", place: "Petrified Forest, Winter 2025",
    alt: "Striped blue and red clay mounds under a clear sky, a lone hiker for scale",
    tags: ["Desert"]
  },
  {
    src: P + "cliff-dwelling-winter-2025.jpg", thumb: T + "cliff-dwelling-winter-2025.jpg",
    ratio: 0.666,
    title: "Cliff Dwelling", place: "Mesa Verde, Winter 2025",
    alt: "Ancestral Puebloan stone dwellings tucked beneath a sandstone overhang",
    tags: ["Desert"]
  },
  {
    src: P + "meadow-season-summer-2025.jpg", thumb: T + "meadow-season-summer-2025.jpg",
    ratio: 0.666,
    title: "Meadow Season", place: "Mount Rainier, Summer 2025",
    alt: "A subalpine meadow of lupine and bistort below a rocky ridge",
    tags: ["Landscape"]
  },
  {
    src: P + "meltwater-summer-2025.jpg", thumb: T + "meltwater-summer-2025.jpg",
    ratio: 0.666,
    title: "Waterfall 1", place: "Mount Rainier, Summer 2025",
    alt: "A braided waterfall below Mount Rainier's glaciers, seen through firs",
    tags: ["Landscape"]
  },
  {
    src: P + "marmot-in-the-heather-summer-2025.jpg", thumb: T + "marmot-in-the-heather-summer-2025.jpg",
    ratio: 0.773,
    title: "Marmot", place: "Mount Rainier, Summer 2025",
    alt: "A hoary marmot peering out from a patch of pink mountain heather",
    tags: ["Wildlife"]
  },
  {
    src: P + "marmot-2-rainier-summer-2025.jpg", thumb: T + "marmot-2-rainier-summer-2025.jpg",
    ratio: 0.711,
    title: "Marmot 2", place: "Mount Rainier, Summer 2025",
    alt: "A hoary marmot sprawled flat across a boulder, front paws hanging over the edge",
    tags: ["Wildlife"]
  },
  {
    src: P + "wildflowers-and-peaks-summer-2025.jpg", thumb: T + "wildflowers-and-peaks-summer-2025.jpg",
    ratio: 0.666,
    title: "Wildflowers and Peaks", place: "Grand Teton, Summer 2025",
    alt: "Yellow balsamroot in the foreground with the snow-streaked Teton range behind",
    tags: ["Landscape"]
  },
  {
    src: P + "first-light-summer-2025.jpg", thumb: T + "first-light-summer-2025.jpg",
    ratio: 0.666,
    title: "First Light", place: "Grand Teton, Summer 2025",
    alt: "Sunrise catching the Teton peaks, mirrored in still water",
    tags: ["Landscape"]
  },
  {
    src: P + "blue-hour-summer-2025.jpg", thumb: T + "blue-hour-summer-2025.jpg",
    ratio: 0.666,
    title: "First Light 2", place: "Grand Teton, Summer 2025",
    alt: "The Teton range in cool dusk light reflected in a quiet river bend",
    tags: ["Landscape"]
  },
  {
    src: P + "through-the-pines-summer-2025.jpg", thumb: T + "through-the-pines-summer-2025.jpg",
    ratio: 0.666,
    title: "Through the Pines", place: "Yellowstone, Summer 2025",
    alt: "A wide lake shore glimpsed between dark pine boughs",
    tags: ["Landscape"]
  },
  {
    src: P + "river-bend-summer-2025.jpg", thumb: T + "river-bend-summer-2025.jpg",
    ratio: 0.666,
    title: "River Bend", place: "Yellowstone, Summer 2025",
    alt: "A river meandering through a green valley, a car pulled over on the road above",
    tags: ["Landscape"]
  },
  {
    src: P + "white-water-summer-2025.jpg", thumb: T + "white-water-summer-2025.jpg",
    ratio: 0.666,
    title: "Waterfall 2", place: "Yellowstone, Summer 2025",
    alt: "Fast water dropping through a narrow rocky channel",
    tags: ["Landscape"]
  },
  {
    src: P + "firefall-winter-2025.jpg", thumb: T + "firefall-winter-2025.jpg",
    ratio: 0.666,
    title: "Firefall", place: "Yosemite, Winter 2025",
    alt: "Late sun turning Horsetail Fall orange against the dark granite of El Capitan",
    tags: ["Landscape"]
  },
  {
    src: P + "cathedral-road-winter-2025.jpg", thumb: T + "cathedral-road-winter-2025.jpg",
    ratio: 0.666,
    title: "Cathedral Road", place: "Yosemite, Winter 2025",
    alt: "A road running between tall pines with a waterfall on the cliff beyond",
    tags: ["Landscape"]
  },
  {
    src: P + "last-light-winter-2025.jpg", thumb: T + "last-light-winter-2025.jpg",
    ratio: 1.5,
    title: "Last Light", place: "Point Reyes, Winter 2025",
    alt: "A long stairway down to a lighthouse, the ocean gold under a low sun",
    tags: ["Coast"]
  },
  {
    src: P + "cliff-and-cove-winter-2025.jpg", thumb: T + "cliff-and-cove-winter-2025.jpg",
    ratio: 1.5,
    title: "Cliff and Cove", place: "Point Reyes, Winter 2025",
    alt: "White cliffs curving around a narrow beach, the bay stretching out behind",
    tags: ["Coast"]
  },
  {
    src: P + "the-long-way-down-fall-2023.jpg", thumb: T + "the-long-way-down-fall-2023.jpg",
    ratio: 0.763,
    title: "Autumn Road", place: "Vermont, Fall 2023",
    alt: "A road curving downhill through pines and turning maples",
    tags: ["Landscape"]
  },
  {
    src: P + "two-lanes-fall-2023.jpg", thumb: T + "two-lanes-fall-2023.jpg",
    ratio: 1.358,
    title: "Autumn Road 2", place: "Vermont, Fall 2023",
    alt: "Cars on a two-lane road running through autumn woods",
    tags: ["Landscape"]
  },
  {
    src: P + "still-water-fall-2023.jpg", thumb: T + "still-water-fall-2023.jpg",
    ratio: 1.5,
    title: "Autumn Scene", place: "Vermont, Fall 2023",
    alt: "A pond reflecting a hillside of autumn color under a grey sky",
    tags: ["Landscape"]
  },
  {
    src: P + "village-fall-2023.jpg", thumb: T + "village-fall-2023.jpg",
    ratio: 0.711,
    title: "Village", place: "Vermont, Fall 2023",
    alt: "A steepled clock tower above an alpine-style village with mountains behind",
    tags: ["City"]
  },
  {
    src: P + "autumn-trail-vermont-fall-2023.jpg", thumb: T + "autumn-trail-vermont-fall-2023.jpg",
    ratio: 0.734,
    title: "Autumn Trail", place: "Vermont, Fall 2023",
    alt: "A footpath running through woods at peak autumn color, walkers small in the distance",
    tags: ["Landscape"]
  },
  {
    src: P + "tidal-basin-dc-spring-2023.jpg", thumb: T + "tidal-basin-dc-spring-2023.jpg",
    ratio: 0.742,
    title: "Tidal Basin", place: "Washington DC, Spring 2023",
    alt: "The Jefferson Memorial across the water at sunset, framed by a bare cherry branch just coming into bloom",
    tags: ["City", "Flora"]
  },
  {
    src: P + "swing-middletown-fall-2022.jpg", thumb: T + "swing-middletown-fall-2022.jpg",
    ratio: 0.75,
    title: "Swing", place: "Middletown, Fall 2022",
    alt: "A rope swing hanging under a scarlet maple, the roadside deep in fallen leaves",
    tags: ["Landscape"]
  },
  {
    src: P + "first-color-fall-2022.jpg", thumb: T + "first-color-fall-2022.jpg",
    ratio: 0.75,
    title: "First Color", place: "White Mountains, Fall 2022",
    alt: "Rolling hills turning red and gold under a bright blue sky",
    tags: ["Landscape"]
  },
  {
    src: P + "low-tide-summer-2022.jpg", thumb: T + "low-tide-summer-2022.jpg",
    ratio: 1.333,
    title: "Low Tide", place: "Santa Teresa, Costa Rica, Summer 2022",
    alt: "A person and a dog on wet sand at sunset, waves breaking behind them",
    tags: ["Coast"]
  },
  {
    src: P + "hilltop-spring-2022.jpg", thumb: T + "hilltop-spring-2022.jpg",
    ratio: 0.75,
    title: "Hilltop", place: "Puerto Rico, Spring 2022",
    alt: "Pastel houses and a tower on a steep green headland under a pink dusk sky",
    tags: ["Coast"]
  },
  {
    src: P + "hilltop-2-spring-2022.jpg", thumb: T + "hilltop-2-spring-2022.jpg",
    ratio: 0.75,
    title: "Hilltop 2", place: "Puerto Rico, Spring 2022",
    alt: "The same headland in daylight, bright clouds piled above the ridge",
    tags: ["Coast"]
  },
  {
    src: P + "one-sail-costa-rica-spring-2022.jpg", thumb: T + "one-sail-costa-rica-spring-2022.jpg",
    ratio: 0.75,
    title: "One Sail", place: "Costa Rica, Spring 2022",
    alt: "A single sailboat on a wide calm sea seen from a hillside, an island low on the horizon",
    tags: ["Coast"]
  },
  {
    src: P + "scuffle-sichuan-spring-2021.jpg", thumb: T + "scuffle-sichuan-spring-2021.jpg",
    ratio: 0.969,
    title: "Scuffle", place: "Garzê & Ngawa, Sichuan, Spring 2021",
    alt: "Two dogs tussling on a monastery courtyard, white stupas and painted temple eaves behind them",
    tags: ["City"]
  },
  {
    src: P + "frost-saratoga-springs-2019.jpg", thumb: T + "frost-saratoga-springs-2019.jpg",
    ratio: 1.599,
    title: "Frost", place: "Saratoga Springs, Fall 2019",
    alt: "Hoarfrost furring the needles of an evergreen branch",
    tags: ["Flora"]
  },
  {
    src: P + "frost-2-saratoga-springs-2019.jpg", thumb: T + "frost-2-saratoga-springs-2019.jpg",
    ratio: 1.612,
    title: "Frost 2", place: "Saratoga Springs, Fall 2019",
    alt: "Rows of hemlock needles each edged in white ice",
    tags: ["Flora"]
  }
];

// 照片还没上传时，页面显示几个占位格子
const PHOTO_PLACEHOLDERS = 4;
