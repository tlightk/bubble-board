import { faker } from "@faker-js/faker";
import { stockImages } from "./stockImages";
const _ = require("lodash");

let dummyMessages = [
    "今日も一緒に働けて幸せだよ！",
    "いつもお疲れ様！もしも今日つらかったら、泣かせてもらってもいいかな？",
    "あなたがいなかったら、私もたぶん休んでたと思う。ありがとうね！",
    "いい感じだよね、チームワーク！今日も頑張ろう！",
    "今日も綺麗に仕事してるね！私も見習わなきゃ。",
    "このグループで一番かわいいのは、もちろん私だけど、あなたももう少しで追いつけるかも！",
    "いつもいいアドバイスありがとう！まさか、こんなに役に立つとは思わなかったよ。",
    "あなたの声を聞くだけで、元気が出るんだよね。ありがとう！",
    "今日の昼食はあなたが選んだお店が当たりだったね！おごりにしようか？",
    "がんばりすぎると大変だよ。でも君はそれでも頑張ってる。すごい！",
    "毎日お疲れ様！君のせいで、私もがんばらなきゃならないんだから。",
    "今日もがんばったね！ご褒美においしいもの食べよう！",
    "おつかれちゃん！やっぱり君は最高にかわいいね！",
    "おつかれさま！今日もあなたの仕事は天井知らず！",
    "今日のあなたの働きっぷりは、まるでスーパーヒーローのよう！",
    "今日の仕事、お疲れ様でした！次は私ががんばります！",
    "今日も一日頑張って、後で懲罰的なお菓子を食べよう！",
    "いつも頑張っている人には本当に感謝しています。...でも、たまには休んでもいいんですよ？",
    "いつもおいしいおやつを持ってきてくれる人には感謝しています。...でも、そろそろおやつばかりでなく、仕事にも力を入れていただけると助かります。",
    "仕事が終わったら、みんなで飲みに行きたいね。その日を楽しみにしてるよ！",
    "今日のプレゼン、すごく良かったよ！みんなにも褒められたよ！",
    "いつも仕事をきちんと終わらせてくれてありがとう！他の人にもその例を見せつけてあげられるといいんだけどね...",
    "オフィスを散らかす努力に感謝してるよ。物を探すのが宝探しのようで楽しいさ！",
    "チームへの個性的な貢献に感謝してるよ。君が実際に何をやっているのかを解き明かすのは謎解きみたいだ！",
    "チームのロングブレイクのエキスパートでいてくれてありがとう。君の時間管理スキルには感動するよ！",
    "君の時間厳守は伝説的だよ。君がいつもオシャレに遅刻してくれることを頼りにしてるよ！",
    "誤りを指摘してくれる君の徹底さに感謝してるよ。まるで個人用のエラー検出器がいるみたいだ！",
    "チームの指定された先延ばしのプロとして、君に感謝してるよ。延期された報酬をマスターしているんだね！",
    "ミーティングにいつもオシャレに遅れてくれてありがとう。君の「オシャレに遅れる」スタイルはまさに他に類を見ないよ！",
    "締切を守れない君の創造的な言い訳には感心するよ。君の創造性の物語は終わりがないみたいだ！",
    "オフィスのDJとしての君に感謝してるよ。君のユニークな音楽センスで私たちの耳は以前とはまったく違うよ!",
    "君はコーヒーの取りに行く＆お菓子の配達の達人だよ。君がいなかったら、私たちのカフェイン＆糖分のレベルは危険なほど低いことになるよ！",
    "君が私たちのオフィスの居住コメディアンであることに感謝してるよ。君の機知に富んだジョークはいつも私たちの仕事を明るくしてくれるよ！",
    "オフィスの公認ユニコーンである君に感謝してるよ。君の魔法の存在が私たちの職場を虹の紙吹雪で輝かせてくれる！",
    "オフィスチェアレーシングの卓越したスキルに感謝！オフィスの廊下を椅子で猛スピードで駆け抜ける君の記録的な速さと正確さは見るものを圧倒するよ。新たなオフィスチェアの栄光を目指してレースを続けて！",
    "ペーパークリップの秘密の言語を解読し、翻訳する卓越した能力に拍手喝采！ペーパークリップの象形文字を解読し、意味のあるメッセージに翻訳する君の熟練の技は本当に注目に値するよ。ペーパークリップの宇宙の謎を解き続けて、言語学の腕前で我々を啓蒙してくれ！",
    "また一週間のオフィスのドラマと政治を生き残ったおめでとう！無傷のポーカーフェイスと忍者のような身のこなしのスキルには勲章がほしいね。オフィスのドラゴンを倒し続けて、コーヒーが強く、締め切りが融通きくことを祈ってるよ！",
    "オフィスの「創造的」な言い訳の達人に乾杯！遅刻の最もクリエイティブで奇抜な言い訳、締切の遅れ、ミスの言い訳において君の能力は並外れてるよ。さらなる独創性で我々を驚かせ続けて、クリエイティブなアイデアが枯渇しないことを祈ってるよ！",
    "昇進おめでとう！あなたの優れた紙折りのスキルと複雑な折り紙の作品には本当に感動しました。オフィスでの素晴らしい紙アートをもっと見るのを楽しみにしています！",
    "昨日の飲み会楽しかったね！次の日になっても二日酔いだけど（笑）",
    "お誕生日おめでとう！プレゼントはあとで渡しますね！",
    "ごめん、実は僕は人間じゃなくて宇宙人だったんだ。君との関係には重力の法則が適用されず、別れなきゃいけないんだ！",
    "やっぱり、僕のインスタントラーメン愛が君を超えちゃった。ラーメンとの未来を選びました。",
    "君とのデートが楽しすぎて、僕のテンションが常に上がってしまって医者に言われたらヤバいって。健康のために別れよう！",
    "ごめん、実は僕はネコだったんだ。君が魚を食べるたびにムラムラしてしまって…。ネコの本能に逆らえないんだ！",
    "君が昼寝をするたびに、僕のパジャマが勝手に洗濯されてしまうんだ。パジャマの自己決定権を侵害されるのは無理だよ！"
]

dummyMessages = _.shuffle(dummyMessages);

const dummyData = [];

for (let i = 0; i < 21; i++) {
    dummyData.push({
        id: i,
        送信日時: faker.date.recent(3),
        Amount: Math.floor(Math.random() * 98 + 2),
        Message: dummyMessages[i],
        ImageURL: stockImages[i]
    })
}

export { dummyData };