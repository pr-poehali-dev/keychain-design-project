import { useState } from "react";

const SPADE_IMG = "https://cdn.poehali.dev/projects/49195871-c130-4a9a-b3b8-11e0bc1313ea/files/e898174a-7e05-4036-ad26-b034ecd72ae6.jpg";
const HEART_IMG = "https://cdn.poehali.dev/projects/49195871-c130-4a9a-b3b8-11e0bc1313ea/files/aaf95e26-44e7-44ab-8f84-410aba63ec75.jpg";
const PROCESS_IMG = "https://cdn.poehali.dev/projects/49195871-c130-4a9a-b3b8-11e0bc1313ea/files/a743fabd-2513-41b2-bf83-00e11f4b2c11.jpg";

const sections = [
  { id: 1, label: "Титульный лист" },
  { id: 2, label: "Содержание" },
  { id: 3, label: "Введение" },
  { id: 4, label: "История брелоков" },
  { id: 5, label: "Выбор материала" },
  { id: 6, label: "Выбор дизайна" },
  { id: 7, label: "Макет брелоков" },
  { id: 8, label: "Изготовление" },
  { id: 9, label: "Заключение" },
  { id: 10, label: "Источники" },
];

export default function Index() {
  const [active, setActive] = useState(1);

  return (
    <div style={{ fontFamily: "'Golos Text', sans-serif", minHeight: "100vh", background: "#f9f9f7", color: "#1a1a1a" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Golos+Text:wght@400;500;600;700&family=Cormorant:ital,wght@0,400;0,600;1,400&display=swap');`}</style>

      <div style={{ display: "flex", minHeight: "100vh" }}>
        {/* Sidebar */}
        <aside style={{
          width: 240, minHeight: "100vh", background: "#fff", borderRight: "1px solid #e8e8e4",
          padding: "40px 0", display: "flex", flexDirection: "column", position: "sticky", top: 0, height: "100vh", overflowY: "auto"
        }}>
          <div style={{ padding: "0 28px 32px", borderBottom: "1px solid #e8e8e4" }}>
            <div style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "#1a1a1a", marginBottom: 8 }}>Проект</div>
            <div style={{ fontFamily: "'Cormorant', serif", fontSize: 20, fontWeight: 600, lineHeight: 1.3, color: "#1a1a1a" }}>
              Творческий проект
            </div>
            <div style={{ fontFamily: "'Cormorant', serif", fontSize: 16, color: "#c0392b", fontStyle: "italic", marginTop: 4 }}>
              Брелоки ♠ ♥
            </div>
          </div>
          <nav style={{ padding: "24px 0", flex: 1 }}>
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => setActive(s.id)}
                style={{
                  display: "flex", alignItems: "center", gap: 12,
                  width: "100%", padding: "10px 28px", background: active === s.id ? "#f4f4f0" : "transparent",
                  border: "none", cursor: "pointer", textAlign: "left",
                  borderLeft: active === s.id ? "3px solid #c0392b" : "3px solid transparent",
                  transition: "all 0.2s"
                }}
              >
                <span style={{
                  width: 22, height: 22, borderRadius: "50%",
                  background: active === s.id ? "#c0392b" : "#e8e8e4",
                  color: active === s.id ? "#fff" : "#1a1a1a",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 10, fontWeight: 700, flexShrink: 0
                }}>{s.id}</span>
                <span style={{ fontSize: 13, fontWeight: active === s.id ? 600 : 400, color: active === s.id ? "#1a1a1a" : "#1a1a1a" }}>
                  {s.label}
                </span>
              </button>
            ))}
          </nav>
          <div style={{ padding: "24px 28px", borderTop: "1px solid #e8e8e4", fontSize: 11, color: "#1a1a1a", lineHeight: 1.6 }}>
            2026 год · 5 класс
          </div>
        </aside>

        {/* Main */}
        <main style={{ flex: 1, padding: "60px 80px", maxWidth: 860 }}>

          {active === 1 && (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "70vh", textAlign: "center" }}>
              <div style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "#1a1a1a", marginBottom: 32 }}>
                Муниципальное общеобразовательное учреждение
              </div>
              <div style={{ fontFamily: "'Cormorant', serif", fontSize: 56, fontWeight: 600, lineHeight: 1.15, marginBottom: 8 }}>
                Брелоки
              </div>
              <div style={{ width: 80, height: 2, background: "#c0392b", marginBottom: 48 }} />
              <div style={{ fontSize: 14, color: "#1a1a1a", lineHeight: 2.4 }}>
                <div><span style={{ color: "#1a1a1a" }}>Творческий проект</span></div>
                <div><span style={{ color: "#1a1a1a" }}>Выполнил:</span> Хохлов Руслан, 9В</div>
                <div><span style={{ color: "#1a1a1a" }}>Руководитель:</span> Учитель трудов</div>
                <div><span style={{ color: "#1a1a1a" }}>Год:</span> 2026</div>
              </div>
              <div style={{ marginTop: 64, display: "flex", gap: 24 }}>
                <div style={{ fontSize: 52 }}>♠</div>
                <div style={{ fontSize: 52, color: "#c0392b" }}>♥</div>
              </div>
            </div>
          )}

          {active === 2 && (
            <div>
              <SectionHeader num={2} title="Содержание" />
              <div style={{ marginTop: 40 }}>
                {[
                  { n: "1", t: "Введение", p: "3" },
                  { n: "2", t: "История возникновения брелоков", p: "4" },
                  { n: "3", t: "Выбор материала (картон)", p: "5" },
                  { n: "4", t: "Выбор дизайна (карта пики и сердечко)", p: "6" },
                  { n: "5", t: "Макет брелоков", p: "7" },
                  { n: "6", t: "Этап изготовления брелоков", p: "8" },
                  { n: "7", t: "Заключение", p: "9" },
                  { n: "8", t: "Список использованных источников", p: "10" },
                ].map((item) => (
                  <div key={item.n} style={{
                    display: "flex", alignItems: "center", gap: 12,
                    padding: "14px 0", borderBottom: "1px solid #f0f0ec"
                  }}>
                    <span style={{
                      width: 28, height: 28, borderRadius: "50%", background: "#f0f0ec",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 12, fontWeight: 600, color: "#1a1a1a", flexShrink: 0
                    }}>{item.n}</span>
                    <span style={{ flex: 1, fontSize: 15, color: "#1a1a1a" }}>{item.t}</span>
                    <span style={{ fontSize: 13, color: "#c0392b", fontWeight: 600 }}>{item.p}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {active === 3 && (
            <div>
              <SectionHeader num={3} title="Введение" />
              <div style={{ marginTop: 40 }}>
                <InfoCard accent>
                  Брелок — это небольшое украшение или сувенир, который крепится к ключам, сумке или одежде. Сегодня брелоки являются не только практичным аксессуаром, но и способом самовыражения.
                </InfoCard>
                <BodyText><b>Актуальность темы:</b> Брелоки пользуются большой популярностью среди молодёжи и детей. Создание брелока своими руками — это интересное творческое занятие, развивающее художественный вкус и мелкую моторику.</BodyText>
                <BodyText><b>Цель проекта:</b> Создать оригинальные брелоки в форме карты пики и сердечка из картона своими руками.</BodyText>
                <BodyText><b>Задачи:</b></BodyText>
                <ul style={{ paddingLeft: 20, color: "#1a1a1a", lineHeight: 2.2, fontSize: 15 }}>
                  <li>Изучить историю возникновения брелоков</li>
                  <li>Выбрать материал для изготовления</li>
                  <li>Разработать дизайн брелоков</li>
                  <li>Создать макет и изготовить брелоки</li>
                  <li>Подвести итоги работы</li>
                </ul>
                <BodyText><b>Предмет исследования:</b> Брелоки ручной работы из картона.</BodyText>
              </div>
            </div>
          )}

          {active === 4 && (
            <div>
              <SectionHeader num={4} title="История возникновения брелоков" />
              <div style={{ marginTop: 40 }}>
                <BodyText>Слово «брелок» происходит от французского <i>breloque</i> — украшение, побрякушка. Первые брелоки появились ещё в Древнем Египте и Риме — маленькие амулеты, которые носили как обереги и вешали на пояс или шею.</BodyText>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, margin: "32px 0" }}>
                  {[
                    { era: "Древний Египет", desc: "Маленькие амулеты из золота и камней в форме скарабеев и животных" },
                    { era: "Средние века", desc: "Украшения на поясах рыцарей — символы принадлежности к роду" },
                    { era: "XVII–XVIII вв.", desc: "Во Франции стали популярны декоративные брелоки для часов и ключей" },
                    { era: "Наши дни", desc: "Брелоки выпускаются промышленно и создаются вручную из любых материалов" },
                  ].map((item) => (
                    <div key={item.era} style={{ padding: "20px 24px", background: "#fff", border: "1px solid #e8e8e4", borderRadius: 8 }}>
                      <div style={{ fontSize: 12, fontWeight: 700, color: "#c0392b", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 8 }}>{item.era}</div>
                      <div style={{ fontSize: 14, color: "#1a1a1a", lineHeight: 1.7 }}>{item.desc}</div>
                    </div>
                  ))}
                </div>
                <BodyText>В России брелоки стали популярны в XIX веке. Их носили состоятельные горожане, украшая ими часовые цепочки. Сегодня брелок — доступный и любимый аксессуар для всех.</BodyText>
              </div>
            </div>
          )}

          {active === 5 && (
            <div>
              <SectionHeader num={5} title="Выбор материала — Картон" />
              <div style={{ marginTop: 40 }}>
                <BodyText>Для создания брелоков был выбран <b>картон</b>. Это доступный, лёгкий и экологичный материал, отлично подходящий для ручного творчества.</BodyText>
                <div style={{ margin: "32px 0" }}>
                  <div style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#1a1a1a", marginBottom: 16 }}>Сравнение материалов</div>
                  <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
                    <thead>
                      <tr style={{ background: "#1a1a1a", color: "#fff" }}>
                        <th style={{ padding: "12px 16px", textAlign: "left", fontWeight: 600 }}>Материал</th>
                        <th style={{ padding: "12px 16px", textAlign: "left", fontWeight: 600 }}>Доступность</th>
                        <th style={{ padding: "12px 16px", textAlign: "left", fontWeight: 600 }}>Сложность</th>
                        <th style={{ padding: "12px 16px", textAlign: "left", fontWeight: 600 }}>Результат</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { m: "Картон ✓", a: "Высокая", s: "Низкая", r: "Отличный" },
                        { m: "Пластик", a: "Средняя", s: "Высокая", r: "Хороший" },
                        { m: "Дерево", a: "Низкая", s: "Высокая", r: "Хороший" },
                        { m: "Полимерная глина", a: "Средняя", s: "Средняя", r: "Хороший" },
                      ].map((row, i) => (
                        <tr key={row.m} style={{ background: i % 2 === 0 ? "#f9f9f7" : "#fff", borderBottom: "1px solid #e8e8e4" }}>
                          <td style={{ padding: "11px 16px", fontWeight: i === 0 ? 700 : 400, color: i === 0 ? "#c0392b" : "#1a1a1a" }}>{row.m}</td>
                          <td style={{ padding: "11px 16px", color: "#1a1a1a" }}>{row.a}</td>
                          <td style={{ padding: "11px 16px", color: "#1a1a1a" }}>{row.s}</td>
                          <td style={{ padding: "11px 16px", color: "#1a1a1a" }}>{row.r}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <InfoCard><b>Почему картон?</b> Лёгкий, прочный, легко поддаётся обработке ножницами. Можно раскрасить, покрыть лаком для прочности. Экологически чистый и безопасный материал.</InfoCard>
              </div>
            </div>
          )}

          {active === 6 && (
            <div>
              <SectionHeader num={6} title="Выбор дизайна — Карта пики и сердечко" />
              <div style={{ marginTop: 40 }}>
                <BodyText>Для проекта выбраны два дизайна брелоков, вдохновлённые символами игральных карт: <b>пика ♠</b> и <b>сердечко ♥</b>. Эти символы узнаваемы и эффектно смотрятся в минималистичном исполнении.</BodyText>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, margin: "32px 0" }}>
                  <div style={{ background: "#fff", border: "2px solid #1a1a1a", borderRadius: 12, overflow: "hidden" }}>
                    <div style={{ aspectRatio: "1", overflow: "hidden" }}>
                      <img src={SPADE_IMG} alt="Брелок Пика" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
                    <div style={{ padding: "20px 24px" }}>
                      <div style={{ fontSize: 32, marginBottom: 8 }}>♠</div>
                      <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 6 }}>Карта пики</div>
                      <div style={{ fontSize: 13, color: "#1a1a1a", lineHeight: 1.7 }}>Чёрный цвет, строгая форма. Символизирует смелость и решительность.</div>
                    </div>
                  </div>
                  <div style={{ background: "#fff", border: "2px solid #c0392b", borderRadius: 12, overflow: "hidden" }}>
                    <div style={{ aspectRatio: "1", overflow: "hidden" }}>
                      <img src={HEART_IMG} alt="Брелок Сердечко" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
                    <div style={{ padding: "20px 24px" }}>
                      <div style={{ fontSize: 32, color: "#c0392b", marginBottom: 8 }}>♥</div>
                      <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 6 }}>Сердечко</div>
                      <div style={{ fontSize: 13, color: "#1a1a1a", lineHeight: 1.7 }}>Красный цвет, мягкая форма. Символизирует любовь и тепло.</div>
                    </div>
                  </div>
                </div>
                <BodyText>Оба дизайна выполнены в едином стиле: чёткие контуры, минималистичное оформление, лаконичная цветовая гамма. Брелоки можно дарить как сувениры или использовать для ключей.</BodyText>
              </div>
            </div>
          )}

          {active === 7 && (
            <div>
              <SectionHeader num={7} title="Макет брелоков" />
              <div style={{ marginTop: 40 }}>
                <BodyText>Перед изготовлением были разработаны макеты брелоков в натуральную величину. Размер каждого брелока — <b>5 × 5 см</b>.</BodyText>
                <div style={{ display: "flex", gap: 40, justifyContent: "center", margin: "40px 0", flexWrap: "wrap" }}>
                  {[
                    { sym: "♠", color: "#1a1a1a", label: "Макет «Пика»", note: "чёрный картон, белая обводка" },
                    { sym: "♥", color: "#c0392b", label: "Макет «Сердечко»", note: "красный картон, золотой контур" },
                  ].map((m) => (
                    <div key={m.label} style={{ textAlign: "center" }}>
                      <div style={{
                        width: 160, height: 200, background: "#fff", border: "2px dashed #ccc",
                        borderRadius: 12, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                        position: "relative", padding: 20
                      }}>
                        <div style={{ fontSize: 80, lineHeight: 1, color: m.color }}>{m.sym}</div>
                        <div style={{ position: "absolute", top: 8, left: 8, fontSize: 10, color: "#1a1a1a" }}>5 см</div>
                        <div style={{ position: "absolute", top: "50%", right: 8, fontSize: 10, color: "#1a1a1a", transform: "translateY(-50%) rotate(90deg)" }}>5 см</div>
                        <div style={{
                          position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)",
                          width: 16, height: 20, borderRadius: 4, background: "#ddd", border: "1px solid #ccc"
                        }} />
                      </div>
                      <div style={{ marginTop: 12, fontSize: 13, fontWeight: 600 }}>{m.label}</div>
                      <div style={{ fontSize: 11, color: "#1a1a1a" }}>{m.note}</div>
                    </div>
                  ))}
                </div>
                <div style={{ background: "#f4f4f0", borderRadius: 8, padding: "20px 24px", marginTop: 24 }}>
                  <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 12, textTransform: "uppercase", letterSpacing: "0.08em", color: "#1a1a1a" }}>Материалы для изготовления</div>
                  {["Цветной картон (чёрный, красный, белый)", "Ножницы и канцелярский нож", "Простой карандаш и линейка", "Клей ПВА или двусторонний скотч", "Дырокол"].map((item, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, padding: "7px 0", fontSize: 14, color: "#1a1a1a" }}>
                      <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#c0392b", flexShrink: 0 }} />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {active === 8 && (
            <div>
              <SectionHeader num={8} title="Этап изготовления брелоков" />
              <div style={{ marginTop: 40 }}>
                <img src={PROCESS_IMG} alt="Процесс изготовления" style={{ width: "100%", borderRadius: 12, marginBottom: 40, objectFit: "cover", maxHeight: 300 }} />
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {[
                    { n: "01", title: "Подготовка шаблона", desc: "На бумаге нарисовала шаблоны символов пики и сердечка размером 5×5 см. Вырезала шаблоны." },
                    { n: "02", title: "Перенос на картон", desc: "Обвела шаблоны карандашом на цветном картоне: пику — на чёрном, сердечко — на красном." },
                    { n: "03", title: "Вырезание", desc: "Аккуратно вырезала фигуры по контуру ножницами. Края обработала для ровности." },
                    { n: "04", title: "Склеивание слоёв", desc: "Для прочности склеила два слоя картона вместе с помощью клея ПВА. Оставила под прессом на 30 минут." },
                    { n: "05", title: "Декорирование", desc: "Нанесла белую обводку на пику и золотой контур на сердечко маркером. Добавила детали." },
                    { n: "06", title: "Отверстие", desc: "Сделал отверстие дыроколом в верхней части брелока." },
                  ].map((step, i) => (
                    <div key={step.n} style={{
                      display: "flex", gap: 20, padding: "20px 24px",
                      background: "#fff", border: "1px solid #e8e8e4", borderRadius: 8
                    }}>
                      <div style={{
                        fontFamily: "'Cormorant', serif", fontSize: 36, fontWeight: 600,
                        color: i % 2 === 0 ? "#1a1a1a" : "#c0392b", lineHeight: 1, flexShrink: 0
                      }}>{step.n}</div>
                      <div>
                        <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 6 }}>{step.title}</div>
                        <div style={{ fontSize: 14, color: "#1a1a1a", lineHeight: 1.7 }}>{step.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {active === 9 && (
            <div>
              <SectionHeader num={9} title="Заключение" />
              <div style={{ marginTop: 40 }}>
                <InfoCard accent>
                  В ходе работы над проектом были созданы два оригинальных брелока из картона — в форме карты пики и сердечка. Все поставленные задачи были выполнены.
                </InfoCard>
                <BodyText>В процессе работы я изучила историю возникновения брелоков, выбрала подходящий материал и разработала дизайн. Работа с картоном оказалась увлекательным занятием, которое развивает аккуратность, терпение и творческое мышление.</BodyText>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, margin: "24px 0" }}>
                  {[
                    { icon: "📚", text: "Изучена история брелоков" },
                    { icon: "🎨", text: "Разработан оригинальный дизайн" },
                    { icon: "✂️", text: "Освоена техника работы с картоном" },
                    { icon: "🔑", text: "Созданы 2 готовых брелока" },
                  ].map((item) => (
                    <div key={item.text} style={{
                      padding: "16px 20px", background: "#f9f9f7",
                      border: "1px solid #e8e8e4", borderRadius: 8,
                      display: "flex", alignItems: "center", gap: 12, fontSize: 14, color: "#444"
                    }}>
                      <span style={{ fontSize: 22 }}>{item.icon}</span>
                      {item.text}
                    </div>
                  ))}
                </div>
                <BodyText>Брелоки ручной работы — это уникальный и душевный подарок. В будущем планирую расширить коллекцию, добавив новые символы и материалы — ткань, пластик, термоусадочные плёнки.</BodyText>
              </div>
            </div>
          )}

          {active === 10 && (
            <div>
              <SectionHeader num={10} title="Список использованных источников" />
              <div style={{ marginTop: 40 }}>
                {[
                  { n: 1, text: "Большая российская энциклопедия. Статья «Брелок». — М.: БРЭ, 2022." },
                  { n: 2, text: "Пащенко В.Г. «Декоративно-прикладное искусство для школьников». — М.: Просвещение, 2019. — 128 с." },
                  { n: 3, text: "Лыкова И.А. «Поделки из картона своими руками». — М.: Карапуз, 2021. — 96 с." },
                  { n: 4, text: "Сайт «КреативноеДело.ру» [Электронный ресурс]. — URL: https://kreativnoe-delo.ru (дата обращения: 01.04.2026)." },
                  { n: 5, text: "YouTube-канал «Рукоделие Мастер» [Электронный ресурс]. — URL: youtube.com (дата обращения: 10.04.2026)." },
                  { n: 6, text: "Матвеева Т.К. «История ювелирного искусства и аксессуаров». — СПб.: Питер, 2020. — 204 с." },
                ].map((src) => (
                  <div key={src.n} style={{
                    display: "flex", gap: 16, padding: "16px 0",
                    borderBottom: "1px solid #f0f0ec", alignItems: "flex-start"
                  }}>
                    <span style={{
                      width: 28, height: 28, borderRadius: "50%", background: "#1a1a1a",
                      color: "#fff", display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 12, fontWeight: 700, flexShrink: 0
                    }}>{src.n}</span>
                    <span style={{ fontSize: 14, color: "#1a1a1a", lineHeight: 1.8 }}>{src.text}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Bottom nav */}
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: 60, paddingTop: 32, borderTop: "1px solid #e8e8e4" }}>
            <button
              onClick={() => setActive(Math.max(1, active - 1))}
              disabled={active === 1}
              style={{
                padding: "10px 24px", border: "1px solid #e8e8e4", borderRadius: 6,
                background: "transparent", cursor: active === 1 ? "default" : "pointer",
                color: active === 1 ? "#ccc" : "#1a1a1a", fontSize: 14
              }}
            >← Назад</button>
            <span style={{ fontSize: 12, color: "#1a1a1a", alignSelf: "center" }}>{active} / {sections.length}</span>
            <button
              onClick={() => setActive(Math.min(sections.length, active + 1))}
              disabled={active === sections.length}
              style={{
                padding: "10px 24px", border: "none", borderRadius: 6,
                background: active === sections.length ? "#e8e8e4" : "#c0392b",
                cursor: active === sections.length ? "default" : "pointer",
                color: active === sections.length ? "#1a1a1a" : "#fff", fontSize: 14
              }}
            >Вперёд →</button>
          </div>
        </main>
      </div>
    </div>
  );
}

function SectionHeader({ num, title }: { num: number; title: string }) {
  return (
    <div style={{ borderBottom: "2px solid #1a1a1a", paddingBottom: 20 }}>
      <div style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "#c0392b", marginBottom: 8 }}>
        Раздел {num}
      </div>
      <h1 style={{ fontFamily: "'Cormorant', serif", fontSize: 38, fontWeight: 600, margin: 0, lineHeight: 1.2 }}>
        {title}
      </h1>
    </div>
  );
}

function BodyText({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ fontSize: 15, color: "#1a1a1a", lineHeight: 1.85, margin: "20px 0" }}>
      {children}
    </p>
  );
}

function InfoCard({ children, accent }: { children: React.ReactNode; accent?: boolean }) {
  return (
    <div style={{
      padding: "20px 24px", borderRadius: 8, margin: "24px 0",
      background: accent ? "#fff8f7" : "#f9f9f7",
      borderLeft: `4px solid ${accent ? "#c0392b" : "#1a1a1a"}`,
      fontSize: 15, color: "#1a1a1a", lineHeight: 1.85
    }}>
      {children}
    </div>
  );
}