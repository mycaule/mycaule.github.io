/**
* Video embed tags
*
* Hexo shipped `youtube` and `vimeo` tags in core until 7.0, which dropped them.
* They are reimplemented here so existing posts keep rendering identical markup
* without pulling in an extra dependency.
*
* Syntax:
*   {% youtube video_id [playlist] [nocookie] %}
*   {% vimeo video_id %}
*/

// Video ids are author-supplied, so keep them from breaking out of the attribute.
function escapeAttr(value) {
  return String(value).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
}

function container(src) {
  return '<div class="video-container">' +
    '<iframe src="' + escapeAttr(src) + '" frameborder="0" loading="lazy" allowfullscreen></iframe>' +
    '</div>';
}

hexo.extend.tag.register('youtube', function(args) {
  var id = args.shift();
  var host = args.indexOf('nocookie') > -1 ? 'https://www.youtube-nocookie.com' : 'https://www.youtube.com';
  var path = args.indexOf('playlist') > -1 ? '/embed/videoseries?list=' + id : '/embed/' + id;

  return container(host + path);
});

hexo.extend.tag.register('vimeo', function(args) {
  return container('https://player.vimeo.com/video/' + args[0]);
});

hexo.extend.tag.register('dailymotion', function(args) {
  return container('https://www.dailymotion.com/embed/video/' + args[0]);
});
