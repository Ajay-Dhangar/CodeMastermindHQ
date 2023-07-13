---
id: listenable-events
title: Listenable Events
date: 2021-03-07 19:38:23
---

Source: <a href='https://reactjs.org/docs/events.html#supported-events' class='external'>reactjs.org</a>

## Clipboard Events

```shell
# Event names:
onCopy onCut onPaste

# Properties:
DOMDataTransfer clipboardData
```

## Composition Events

```shell
# Event names:
onCompositionEnd onCompositionStart onCompositionUpdate
# Properties:
string data
```

## Keyboard Events

```shell
# Event names:
onKeyDown onKeyPress onKeyUp

# Properties:
boolean altKey
number charCode
boolean ctrlKey
boolean getModifierState(key)
string key
number keyCode
string locale
number location
boolean metaKey
boolean repeat
boolean shiftKey
number which
```

The key property can take any of the values documented in the <a href='https://www.w3.org/TR/uievents-key/#named-key-attribute-values' class='external'>DOM Level 3 Events spec (w3.org)</a>.

## Focus Events

```shell
# Event names:
onFocus onBlur
# These focus events work on all elements in the React DOM, not just form elements.

# Properties:
DOMEventTarget relatedTarget
```

See: <a href='https://reactjs.org/docs/events.html#onfocus' class='external'> onFocus (reactjs.org)</a> and <a href='https://reactjs.org/docs/events.html#onblur' class='external'> onBlur(reactjs.org)</a>

## Form Events

```shell
# Event names:
onChange onInput onInvalid onSubmit
```

For more information about the `onChange` event, see <a href='https://reactjs.org/docs/forms.html' class='external'> Forms (reactjs.org)</a>

## Generic Events

```shell
# Events names
onError onLoad
```

## Mouse Events

```shell
# Event names:
onClick onContextMenu onDoubleClick onDrag onDragEnd onDragEnter onDragExit
onDragLeave onDragOver onDragStart onDrop onMouseDown onMouseEnter onMouseLeave
onMouseMove onMouseOut onMouseOver onMouseUp
```

The `onMouseEnter` and `onMouseLeave` events propagate from the element being left to the one being entered instead of ordinary bubbling and do not have a capture phase.

```shell
# Properties:
boolean altKey
number button
number buttons
number clientX
number clientY
boolean ctrlKey
boolean getModifierState(key)
boolean metaKey
number pageX
number pageY
DOMEventTarget relatedTarget
number screenX
number screenY
boolean shiftKey
```

## Selection Events

```shell
# Event names:
onSelect
```

## Touch Events

```shell
# Event names:
onTouchCancel onTouchEnd onTouchMove onTouchStart

# Properties:
boolean altKey
DOMTouchList changedTouches
boolean ctrlKey
boolean getModifierState(key)
boolean metaKey
boolean shiftKey
DOMTouchList targetTouches
DOMTouchList touches
```

## UI Events

```shell
# Event names:
onScroll

# Properties:
number detail
DOMAbstractView view
```

:::note
Starting with React 17, the `onScroll` event **does not bubble** in React. This matches the browser behavior and prevents the confusion when a nested scrollable element fires events on a distant parent.
:::

## Wheel Events

```shell
# Event names:
onWheel

# Properties:
number deltaMode
number deltaX
number deltaY
number deltaZ
```

## Media Events

```shell
# Event names:
onAbort onCanPlay onCanPlayThrough onDurationChange onEmptied onEncrypted
onEnded onError onLoadedData onLoadedMetadata onLoadStart onPause onPlay
onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend
onTimeUpdate onVolumeChange onWaiting
```

## Image Events

```shell
# Event names:
onLoad onError
```

## Animation Events

```shell
# Event names:
onAnimationStart onAnimationEnd onAnimationIteration

# Properties:
string animationName
string pseudoElement
float elapsedTime
```

## Transition Events

```shell
# Event names:
onTransitionEnd

# Properties:
string propertyName
string pseudoElement
float elapsedTime
```

## Other Events

```shell
# Event names:
onToggle
```
