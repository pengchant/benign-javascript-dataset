
  var activityId = '21790';
  if (activityId) {
    var replyHash = location.hash.match(/^#reply(\d+)/);
    var replyId = replyHash ? replyHash[1] : null;
    typeof window.bbComment === 'function' &&
    new window.bbComment(
      '.comm',
      activityId,
      activityId > 100000 ? 1 : 4,
      null,
      replyId > 0 ? replyId : ''
    );
  }
