var rUrl = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[.\!\/\\w]*))?)/;

var rImage = /\.(png|jpe?g|gif|webp|svg|avif)$/i;

/**
* Fancybox tag
*
* Syntax:
*   {% fancybox /path/to/image [/path/to/thumbnail] [title] %}
*/

// Paths and titles come from post source, so keep them inside the attribute.
function escapeAttr(value) {
  return String(value).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
}

hexo.extend.tag.register('fancybox', function(args){
  var original = args.shift(),
    thumbnail = '';

  // rUrl only matches absolute URLs, so the documented local-path thumbnail
  // form never triggered. Also accept anything ending in an image extension.
  if (args.length && (rUrl.test(args[0]) || rImage.test(args[0]))){
    thumbnail = args.shift();
  }

  var title = args.join(' ');

  return '<a class="fancybox" href="' + escapeAttr(original) + '" title="' + escapeAttr(title) + '">' +
    '<img src="' + escapeAttr(thumbnail || original) + '" alt="' + escapeAttr(title) + '">' +
    '</a>' +
    (title ? '<span class="caption">' + escapeAttr(title) + '</span>' : '');
});