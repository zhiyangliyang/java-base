import 'dart:io';
import 'dart:convert';

void main() async {
  var result = await _getDataFormZhihuAPI();
  print(result);
}

//api接口: http://news-at.zhihu.com/api/3/stories/latest
_getDataFormZhihuAPI() async {
  // 1.创建HTTP client对象
  var httpClient = new HttpClient();
  // 2.创建Uri对象
  var uri = new Uri.http('news-at.zhihu.com', '/api/3/stories/latest');
  // 3.发起请求，等待请求
  var request = await httpClient.getUrl(uri);
  // 4.关闭请求，等待响应
  var response = await request.close();
  // 5.解码相应的内容
  return await response.transform(utf8.decoder).join();
}
