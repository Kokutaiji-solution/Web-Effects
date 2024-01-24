***********************************************************
[注意書き]

上二つは、ある程度基本的なものしか使いませんが、
下二つは、難易度が少し高めなので、分からないことがあったら
自分で調べたり、聞いたりしてください。

[キーワード] : 調べるときのヒントに使ってください。
* setEventListener : clickを検知する　＊重要
* mouseDown : マウスのボタンが押されたときに出るイベント　＊重要
* keyDown : キーボードが押されたときに出るイベント　＊重要
* new Audio : 音声を処理する
* Object : オブジェクト　＊頻出
* Array : 配列　＊頻出
* forEach : 配列の値を取り出す
* for : 繰り返し処理(forEachの代わりに使えるかも)　＊頻出

***********************************************************

# クリックすると音を鳴らす関数
```
clickSound( sound )
```

## 引数
* sound : Audio オブジェクト

## 仕様
受け取ったsoundをクリックされたときに鳴らす。
音が鳴っている途中でさらに再生をされたら、２回目を重ねて再生すること。

## 例
```
    const audio = new Audio('test.mp3');
    clickSound(audio);
    -> マウスをクリックすると、test.mp3が再生される。

```

***********************************************************

# キーボードを押すと音が鳴る関数
```
keyboardSound( sound )
```
##  引数
* sound : Audio オブジェクト

## 仕様
受け取ったsoundをキーが押されたときに鳴らす。
音が鳴っている途中でさらに再生をされたら、２回目を重ねて再生すること。

## 例
```
    const audio = new Audio('test.mp3');
    keyboardSound(audio);
    -> キーを押すと、test.mp3が再生される。

```


***********************************************************
これより下は上で作った関数を改良すること
***********************************************************


# クリックすると音を鳴らす関数
```
clickSound( option )
```

## 引数
* option : Object
    {
        default ; Audio オブジェクト,
        [
            buttons : Object
                {
                    [button] : Audio オブジェクト ,
                }
        ]
    }

## 仕様
クリックされたとき、option.defaultのサウンドを鳴らす。
もし、option.buttonsが設定されえているときは、
option.buttons.button が押されたとき、optinos.button.buttonのサウンドを鳴らす。
音が鳴っている途中でさらに再生をされたら、２回目を重ねて再生すること。

## 例
```
    const audio = new Audio('test.mp3');
    const audio2 = new Audio('test2.mp3')

    const option = {
        default : audio,
        buttons : {
            'right': audio2
        }
    }

    clickSound(audio);
    -> マウスをクリックすると、test.mp3が再生される。右クリックをしたときはtest2.mp3が再生される。
```


***********************************************************

# キーボードを押すと音が鳴る関数
```
keyboardSound( option )
```
##  引数
* option : Object
    {
        default ; Audio オブジェクト,
        [
            keys : Object
                {
                    [key] : Audio オブジェクト ,
                }
        ]
    }

## 仕様
キーが押されたとき、option.defaultのサウンドを鳴らす。
もし、option.keysが設定されているときは、
option.keys.keyが押されたとき、options.keys.keyのサウンドを鳴らす。
音が鳴っている途中でさらに再生をされたら、２回目を重ねて再生すること。

## 例
```
    const audio = new Audio('test.mp3');
    const audio2 = new Audio('test2.mp3')

    const option = {
        default : audio,
        keys : {
            'enter': audio2
        }
    }

    clickSound(audio);
    -> キーを押すと、test.mp3が再生される。
       Enterキーを押したときはtest2.mp3が再生される。
```


