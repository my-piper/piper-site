import React from 'react';
import { useTranslation } from 'react-i18next';
import { Lock } from 'lucide-react';

const PrivacyPolicy = () => {
    const { i18n, t } = useTranslation();

    return (
        <div className="min-h-screen pt-20 pb-20">
            <section className="relative w-full max-w-[900px] mx-auto px-4 z-10">
                <div className="prose prose-invert max-w-none">
                    {i18n.language === 'ru' ? (
                        // Russian Content
                        <div className="space-y-8">
                            <div className="mb-16">
                                <div className="flex items-center gap-2 text-primary mb-4">
                                    <Lock className="w-5 h-5" />
                                    <span className="text-sm font-semibold tracking-wider uppercase">Безопасность</span>
                                </div>
                                <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 tracking-tight">
                                    Политика конфиденциальности
                                </h1>
                                <p className="text-lg text-text-muted">
                                    Редакция от 05.09.2024
                                </p>
                            </div>
                            <section>
                                <p className="mb-6">Настоящий документ «Политика конфиденциальности» (далее – «Политика») представляет собой правила использования ИП Медведева Михаила Владиславовича (ИНН 500908277890) (далее – «ИП»).</p>
                                <p className="mb-6">Регистрируясь на Сайте, вы (далее «Пользователь») свободно, своей волей и в своих интересах даете свое письменное согласие на обработку Персональной информации в порядке и на условиях, установленных настоящей Политикой.</p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold mb-4">1. ОБЩИЕ ПОЛОЖЕНИЯ</h2>
                                <p className="mb-4">1.1. Способы обработки Персональной информации включают любые действия (операции) или комбинацию действий (операций), в том числе, сбор, запись, систематизация, хранение, уточнение (обновление, изменение), извлечение, использование, передачу (предоставление, доступ), обезличивание, блокирование, удаление, уничтожение в установленных настоящей Политикой целях с использованием средств автоматизации или без использования таких средств по усмотрению ИП.</p>
                                <p className="mb-4">1.2. Здесь и далее в Политике используются термины и определения, предусмотренные Пользовательским Соглашением, размещенным и/или доступным в сети Интернет по адресу <a href="https://piper.my/ru/terms-and-conditions" className="text-primary hover:underline">https://piper.my/info/agreement</a>, а также иными заключаемыми с Пользователем договорами, если иное не предусмотрено настоящей Политикой или не вытекает из ее существа. В иных случаях толкование применяемого в Политике термина производится в соответствии с применимым законодательством, обычаями делового оборота, или научной доктриной.</p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold mb-4">2. ПЕРСОНАЛЬНАЯ ИНФОРМАЦИЯ</h2>
                                <p className="mb-4">2.1. Под Персональной информацией в настоящей Политике понимается:</p>
                                <ul className="list-disc pl-6 mb-4 space-y-2">
                                    <li>2.1.1. Информация, которую Пользователь предоставляет о себе самостоятельно при регистрации или авторизации, а также в процессе дальнейшего использования Сервиса, включая персональные данные Пользователя.</li>
                                    <li>2.1.2. Данные, которые передаются в автоматическом режиме в зависимости от настроек программного обеспечения Пользователя в обезличенном виде.</li>
                                </ul>
                                <p className="mb-4">2.2. ИП вправе устанавливать требования к составу Персональной информации Пользователя, которая должна обязательно предоставляться для использования Приложения и основанного на нем Сервиса. Если определенная информация не помечена ИП как обязательная, ее предоставление или раскрытие осуществляется Пользователем по своему усмотрению.</p>
                                <p className="mb-4">2.3. При регистрации Пользователем обязательно указываются адрес электронной почты.</p>
                                <p className="mb-4">При регистрации ИП создает уникальный идентификатор каждого Пользователя (user_id). Идентификатор Пользователя привязан к информации профиля Пользователя.</p>
                                <p className="mb-4">2.4. Пользователь также может предоставить следующие персональные данные о себе: фамилия, имя, отчество, часовой пояс, номер телефона, пол, дата рождения, город местонахождения, место работы, должность, сведения о себе в свободной форме.</p>
                                <p className="mb-4">2.5. При использовании Сервиса на возмездной основе Пользователь предоставляет информацию об используемом платежном методе, такие как 6 первых и 4 последних цифры карты, срок действия карты и другие в зависимости от используемого платежного метода.</p>
                                <p className="mb-4">2.6. С использованием функциональных возможностей Приложения Пользователь может самостоятельно, своими действиями, по своему усмотрению, раскрывать неопределенному кругу лиц (публиковать в Сервисе) информацию своего профиля в Сервисе, которая может включать персональные данные, в том числе: фамилия, имя, отчество, часовой пояс, номер телефона, пол, дата рождения, город местонахождения, место работы, должность, сведения о себе в свободной форме. Добавленная Пользователем в профиль информация становится доступной неограниченному кругу лиц, с учетом настроек отображения информации профиля в Сервисе.</p>
                                <p className="mb-4">2.7. ИП не осуществляет проверку достоверности предоставляемой Персональной информации и наличия у Пользователя необходимого согласия на ее обработку в соответствии с настоящей Политикой, полагая, что Пользователь действует добросовестно, осмотрительно и прилагает все необходимые усилия к поддержанию такой информации в актуальном состоянии и получению всех необходимых согласий субъектов персональных данных.</p>
                                <p className="mb-4">2.8. ИП осуществляет сбор и хранение данных о действиях Пользователя в Сервисе, используя при этом файлы журналов. В случае, если действия совершены авторизованным Пользователем, такая информация связывается с идентификатором Пользователя.</p>
                                <p className="mb-4">2.9. Пользователь осознает и принимает возможность использования на Сайте программного обеспечения третьих лиц, в результате чего такие лица могут получать и передавать указанные в п.2.1 данные в обезличенном виде. К указанному программному обеспечению третьих лиц относятся:</p>
                                <ul className="list-disc pl-6 mb-4 space-y-2">
                                    <li>2.9.1. системы по сбору аналитических данных: Google Analytics, Яндекс.Метрика, Yandex AppMetrica и т.д.</li>
                                    <li>2.9.2. инструменты аналитики (пиксели) социальных сетей: Facebook, Вконтакте и т.д.</li>
                                    <li>2.9.3. системы размещения рекламы: Google Adsense, Рекламная сеть Яндекса (РСЯ) и т.д.</li>
                                </ul>
                                <p className="mb-4">2.10. Состав и условия сбора обезличенных данных с использованием программного обеспечения третьих лиц определяются непосредственно их правообладателями и могут включать:</p>
                                <ul className="list-disc pl-6 mb-4 space-y-2">
                                    <li>2.10.1. данные браузера (тип, версия, cookie);</li>
                                    <li>2.10.2. данные операционной системы (тип, версия, разрешение экрана);</li>
                                    <li>2.10.3. данные запроса (время, источник перехода, IP-адрес);</li>
                                    <li>2.10.4. иные обезличенные данные о действиях Пользователя в Приложении.</li>
                                </ul>
                                <p className="mb-4">2.11. ИП не несет ответственность за порядок использования Персональной информации Пользователя третьими лицами, с которыми Пользователь взаимодействует в рамках использования Сервиса.</p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold mb-4">3. ПРАВОВЫЕ ОСНОВАНИЯ ОБРАБОТКИ ПЕРСОНАЛЬНОЙ ИНФОРМАЦИИ</h2>
                                <p className="mb-4">3.1. Правовые основания, на которых ИП использует Персональную информацию, включают:</p>
                                <ul className="list-disc pl-6 mb-4 space-y-2">
                                    <li>3.1.1. обработку Персональной информации, когда Пользователь предоставил согласие на обработку для одной или нескольких конкретных целей;</li>
                                    <li>3.1.2. обработку Персональной информации, когда это необходимо для исполнения договора, стороной которого является Пользователь;</li>
                                    <li>3.1.3. обработку Персональной информации, когда это необходимо для заключения договора с Пользователем;</li>
                                    <li>3.1.4. обработку Персональной информации, которая необходима для исполнения ИП своих обязательств в соответствии с применимым правом.</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold mb-4">4. ЦЕЛИ ОБРАБОТКИ ПЕРСОНАЛЬНОЙ ИНФОРМАЦИИ</h2>
                                <p className="mb-4">4.1. ИП осуществляет обработку, в том числе сбор и хранение той Персональной информации, которая необходима для заключения и исполнения договоров с Пользователем, а также сделана общедоступной Пользователем путем заполнения профиля и установки настроек в Личном кабинете.</p>
                                <p className="mb-4">4.2. ИП вправе использовать Персональную информацию в следующих целях:</p>
                                <ul className="list-disc pl-6 mb-4 space-y-2">
                                    <li>4.2.1. заключение договоров на использование Сервиса;</li>
                                    <li>4.2.2. исполнение обязательств по заключенным договорам, включая предоставление Пользователю доступа к Сервису (в рамках реализации функциональных возможностей Сервиса Правообладатель хранит, систематизирует и отображает в Сервисе профили Пользователей, содержащие Персональную информацию);</li>
                                    <li>4.2.3. идентификация Пользователя в рамках исполнения обязательств по заключенным с ним договорам (личный кабинет Пользователя связан с адресом электронной почты Пользователя);</li>
                                    <li>4.2.4. оказание технической поддержки в связи с использованием Сервиса (обращения в службу поддержки принимаются с использованием электронной почты);</li>
                                    <li>4.2.5. обеспечение связи с Пользователем в целях информационного обслуживания и улучшения качества Сервиса по заключенным Договорам, в том числе в порядке нотификации с привлечением третьих лиц (связь с Пользователем осуществляется через электронную почту, указанной Пользователем при регистрации);</li>
                                    <li>4.2.6. использование обезличенных данных для таргетинга рекламных и/или информационных материалов по возрасту, полу, другим признакам;</li>
                                    <li>4.2.7. проведение маркетинговых, статистических и иных исследований на основе обезличенных данных. Данные из систем сбора данных в обезличенном виде собираются и анализируются, чтобы узнать, сколько времени Пользователи проводят в различных разделах Сервиса, их интересах и предпочтениях;</li>
                                    <li>4.2.8. исполнение требований законодательства.</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold mb-4">5. ПРАВА ПОЛЬЗОВАТЕЛЯ В ОТНОШЕНИИ ПЕРСОНАЛЬНОЙ ИНФОРМАЦИИ</h2>
                                <p className="mb-4">5.1. Если это предусмотрено применимым законодательством, Пользователь имеет право:</p>
                                <ul className="list-disc pl-6 mb-4 space-y-2">
                                    <li>5.1.1. получать информацию о сборе и использовании его персональных данных;</li>
                                    <li>5.1.2. получить доступ к своим персональным данным и исправлять их, если они неверные или неполные;</li>
                                    <li>5.1.3. запретить обработку своих персональных данных в случае, если их точность оспаривается, обработка осуществляется неправомерно, а также в случаях, когда ИП более не требуются персональные данные для целей, в которых они обрабатывались ИП;</li>
                                    <li>5.1.4. возражать против обработки своих персональных данных, а также запрещать их обработку в случаях, если ИП обрабатывал их при исполнении задач в общественно-полезных или в собственных законных интересах, и при этом отсутствует вынужденная необходимость в продолжении такой обработки;</li>
                                    <li>5.1.5. в любое время отозвать согласие, которое Пользователь предоставил на обработку своих персональных данных. В случае отзыва Пользователем своего согласия на обработку персональных данных, такой отзыв не повлияет на правомерность обработки, которую ИП осуществлял на основании такого согласия до его отзыва;</li>
                                    <li>5.1.6. требовать удаления своих персональных данных, в случаях: когда они более не относятся к целям, для которых они были собраны или обрабатывались; когда отозвано согласие и у ИП отсутствуют основания для продолжения обработки; когда имеются возражения против дальнейшей обработки в общественно-полезных или в собственных законных интересах ИП и отсутствует вынужденная необходимость в продолжении такой обработки; когда персональные данные обрабатывались неправомерно.</li>
                                </ul>
                                <p className="mb-4">5.2. Указанные права могут быть реализованы путем использования инструментов, которые ИП предлагает в Приложении или посредством направления специального запроса ИП способами, описанными ниже. ИП своевременно ответит на любые такие запросы в соответствии с применимым правом. ИП может попросить Пользователя пройти процедуру идентификации перед обработкой запроса.</p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold mb-4">6. ХРАНЕНИЕ ПЕРСОНАЛЬНОЙ ИНФОРМАЦИИ</h2>
                                <p className="mb-4">6.1. Вся собранная Персональная информация хранится только в течение периода, когда она необходима для достижения целей, в которых такая информация была собрана, или в течение периода, разрешенного или требуемого в соответствии с положениями применимого законодательства.</p>
                                <p className="mb-4">6.2. ИП имеет право проводить проверку систем обработки данных, для определения того, остаются ли действительными цели сбора и обработки персональных данных пользователей. Такое определение основано на ряде факторов, который включает, но не ограничивается следующим: существуют ли договорные отношения между Пользователем и ИП, а также существуют ли договорные или законные основания для продолжения хранения персональных данных Пользователя.</p>
                                <p className="mb-4">6.3. Основываясь на результатах такой проверки и уведомлениях, полученных от субъектов персональных данных, ИП имеет право обновить свои системы. В целях повышения качества Сервиса и обеспечения возможности правовой защиты, ИП вправе хранить лог-файлы о действиях, совершенных Пользователем в рамках использования Сервиса, а также в связи с заключением и исполнением Пользователем Соглашения и иных договоров со своей стороны, в течение 1 (Одного) года с момента их совершения.</p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold mb-4">7. ТРЕБОВАНИЯ К ЗАЩИТЕ ПЕРСОНАЛЬНОЙ ИНФОРМАЦИИ</h2>
                                <p className="mb-4">7.1. ИП осуществляет хранение Персональной информации и обеспечивает ее охрану от несанкционированного доступа и распространения в соответствии с внутренними правилами и регламентами.</p>
                                <p className="mb-4">7.2. В отношении Персональной информации Пользователя сохраняется ее конфиденциальность, за исключением информации, раскрытой Пользователем неограниченному кругу лиц (п. 2.6. настоящей Политики), и иных случаев, когда Сервис предусматривает открытый обмен информацией с иными Пользователями Сервиса или с любыми пользователями сети Интернет.</p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold mb-4">8. ПЕРЕДАЧА ПЕРСОНАЛЬНОЙ ИНФОРМАЦИИ</h2>
                                <p className="mb-4">8.1. ИП вправе передавать Персональную информацию третьим лицам в следующих случаях:</p>
                                <ul className="list-disc pl-6 mb-4 space-y-2">
                                    <li>8.1.1. пользователь выразил свое согласие на такие действия, включая случаи применения Пользователем настроек используемого программного обеспечения, не ограничивающих предоставление определенной информации;</li>
                                    <li>8.1.2. передача необходима в рамках использования Пользователем функциональных возможностей Сервиса;</li>
                                    <li>8.1.3. в связи с передачей Сервиса во владение, пользование или собственность такого третьего лица, включая уступку прав по заключенным с Пользователем договорам в пользу такого третьего лица;</li>
                                    <li>8.1.4. по запросу суда или иного уполномоченного государственного органа в рамках установленной законодательством процедуры;</li>
                                    <li>8.1.5. для защиты прав и законных интересов ИП в связи с нарушением заключенных с Пользователем договоров.</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold mb-4">9. ИЗМЕНЕНИЕ И УДАЛЕНИЕ ПЕРСОНАЛЬНОЙ ИНФОРМАЦИИ</h2>
                                <p className="mb-4">9.1. Пользователь вправе в любой момент самостоятельно отредактировать в своем Личном кабинете предоставленную им при регистрации или авторизации Персональную информацию (за исключением адреса электронной почты).</p>
                                <p className="mb-4">9.2. Пользователь вправе реализовать право на отзыв согласия на обработку его персональных данных путем направления ИП запроса на удаление своей учетной записи по адресу <a href="mailto:support@piper.my" className="text-primary hover:underline">support@piper.my</a></p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold mb-4">10. ИЗМЕНЕНИЕ ПОЛИТИКИ КОНФИДЕНЦИАЛЬНОСТИ</h2>
                                <p className="mb-4">10.1. Настоящая Политика может быть изменена или прекращена ИП в одностороннем порядке без предварительного уведомления Пользователя. Новая редакция Политики вступает в силу с момента ее размещения на Сайте Сервиса, если иное не предусмотрено новой редакцией Политики.</p>
                                <p className="mb-4">10.2. Действующая редакция Политики находится на Сайте Сервиса в сети Интернет по адресу <a href="https://piper.my/ru/privacy-policy" className="text-primary hover:underline">https://piper.my/ru/privacy-policy</a></p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold mb-4">11. РЕКВИЗИТЫ ИП</h2>
                                <div className="overflow-x-auto">
                                    <table className="w-full border border-white/10 mb-8">
                                        <tbody>
                                            <tr className="border-b border-white/10">
                                                <td className="p-3 font-semibold bg-white/5">Название организации</td>
                                                <td className="p-3">ИНДИВИДУАЛЬНЫЙ ПРЕДПРИНИМАТЕЛЬ<br />МЕДВЕДЕВ МИХАИЛ ВЛАДИСЛАВОВИЧ</td>
                                            </tr>
                                            <tr className="border-b border-white/10">
                                                <td className="p-3 font-semibold bg-white/5">ИНН</td>
                                                <td className="p-3">501809647728</td>
                                            </tr>
                                            <tr className="border-b border-white/10">
                                                <td className="p-3 font-semibold bg-white/5">ОГРН/ОГРНИП</td>
                                                <td className="p-3">324774600554269</td>
                                            </tr>
                                            <tr>
                                                <td className="p-3 font-semibold bg-white/5">Электронная почта</td>
                                                <td className="p-3"><a href="mailto:support@piper.my" className="text-primary hover:underline">support@piper.my</a></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </section>
                        </div>
                    ) : (
                        // English Content
                        <div className="space-y-8">
                            <div className="mb-16">
                                <div className="flex items-center gap-2 text-primary mb-4">
                                    <Lock className="w-5 h-5" />
                                    <span className="text-sm font-semibold tracking-wider uppercase">Privacy</span>
                                </div>
                                <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 tracking-tight">
                                    Privacy Policy
                                </h1>
                                <p className="text-lg text-text-muted">
                                    Effective Date: Febrary 15, 2025
                                </p>
                            </div>
                            <section>
                                <h2 className="text-2xl font-bold mb-4">Introduction</h2>
                                <p className="text-text-muted leading-relaxed mb-4">
                                    At Piper, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
                                <p className="text-text-muted leading-relaxed mb-4">
                                    We collect information that you provide directly to us:
                                </p>
                                <ul className="list-disc list-inside space-y-2 text-text-muted ml-4">
                                    <li><strong>Account Information:</strong> Email address, username, and password</li>
                                    <li><strong>Profile Data:</strong> Optional profile information you choose to provide</li>
                                    <li><strong>Content:</strong> Workflows, pipelines, and generated content you create</li>
                                    <li><strong>API Keys:</strong> Third-party API keys (encrypted and stored securely)</li>
                                    <li><strong>Usage Data:</strong> Information about how you use our service</li>
                                    <li><strong>Technical Data:</strong> IP address, browser type, device information</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
                                <p className="text-text-muted leading-relaxed mb-4">
                                    We use the information we collect to:
                                </p>
                                <ul className="list-disc list-inside space-y-2 text-text-muted ml-4">
                                    <li>Provide, maintain, and improve our services</li>
                                    <li>Process your requests and transactions</li>
                                    <li>Send you technical notices and support messages</li>
                                    <li>Respond to your comments and questions</li>
                                    <li>Analyze usage patterns and optimize performance</li>
                                    <li>Detect and prevent fraud and abuse</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold mb-4">Data Security</h2>
                                <p className="text-text-muted leading-relaxed mb-4">
                                    We implement appropriate technical and organizational measures to protect your personal data:
                                </p>
                                <ul className="list-disc list-inside space-y-2 text-text-muted ml-4">
                                    <li>Encryption of data in transit and at rest</li>
                                    <li>Secure API key storage with encryption</li>
                                    <li>Regular security audits and updates</li>
                                    <li>Access controls and authentication</li>
                                    <li>Secure infrastructure and hosting</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold mb-4">Data Sharing and Disclosure</h2>
                                <p className="text-text-muted leading-relaxed mb-4">
                                    We do not sell your personal data. We may share your information only in the following circumstances:
                                </p>
                                <ul className="list-disc list-inside space-y-2 text-text-muted ml-4">
                                    <li><strong>With Your Consent:</strong> When you explicitly authorize us to share</li>
                                    <li><strong>Service Providers:</strong> Third-party vendors who assist in operating our service</li>
                                    <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                                    <li><strong>Business Transfers:</strong> In connection with a merger or acquisition</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold mb-4">Third-Party AI Services</h2>
                                <p className="text-text-muted leading-relaxed mb-4">
                                    When you use your own API keys for third-party AI services (OpenAI, Anthropic, etc.), your data is processed according to their respective privacy policies. We recommend reviewing their policies.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold mb-4">Your Privacy Rights</h2>
                                <p className="text-text-muted leading-relaxed mb-4">
                                    You have the right to:
                                </p>
                                <ul className="list-disc list-inside space-y-2 text-text-muted ml-4">
                                    <li>Access your personal data</li>
                                    <li>Correct inaccurate data</li>
                                    <li>Request deletion of your data</li>
                                    <li>Export your data</li>
                                    <li>Opt-out of marketing communications</li>
                                    <li>Withdraw consent at any time</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold mb-4">Cookies and Tracking</h2>
                                <p className="text-text-muted leading-relaxed mb-4">
                                    We use cookies and similar tracking technologies to improve your experience. You can control cookie preferences through your browser settings.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold mb-4">Data Retention</h2>
                                <p className="text-text-muted leading-relaxed mb-4">
                                    We retain your personal data only for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold mb-4">Children's Privacy</h2>
                                <p className="text-text-muted leading-relaxed mb-4">
                                    Our service is not intended for children under 13. We do not knowingly collect personal information from children under 13.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold mb-4">Changes to This Policy</h2>
                                <p className="text-text-muted leading-relaxed mb-4">
                                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                                <p className="text-text-muted leading-relaxed mb-4">
                                    If you have questions about this Privacy Policy, please contact us at:
                                </p>
                                <p className="text-text-muted leading-relaxed">
                                    Email: <a href="mailto:privacy@piper.my" className="text-primary hover:underline">privacy@piper.my</a>
                                </p>
                            </section>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default PrivacyPolicy;
