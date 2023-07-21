## Nhóm 1: Tiền xử lý metrics
Là một hệ thống, đương nhiên cần có điểm khởi đầu, nhóm 1 bao gồm các thành phần phục vụ cho quá trình khởi tạo metrics. Bản thân mỗi service, ứng dụng cần theo dõi, hiếm khi sẵn có các dữ liệu chỉ số, theo một khuôn dạng nhất định, chúng cũng không cung cấp ra bên ngoài với một điểm truy cập rõ ràng

### Client library
Đói với công việc viết mã, đội phát triển có thể sử dụng các thư viện hỗ trợ để trực tiếp tạo ra các điểm endpoint cho prometheus,
hơn nữa các thư viện cũng hỗ trợ đầy đủ các loại metrics theo đúng định dạng yêu cầu

Tùy thuộc vào ngôn ngữ và công nghệ sử dụng, có rất nhiều thư viện khác nhau mà prometheus cung cấp. Ngòai ra nó còn cung
cấp mã nguồn để tự dựng endpoint và metrics.

```js
makeCounterProvider({
      name: 'myapp_http_request_count',
      help: 'Number of HTTP requests',
      labelNames: ['method', 'route', 'code'],
})
```

### Exporter
Không may thay, có rất nhiều ứng dụng bên thứ 3, các phần mền opensource và dịch vụ đám mây, không cung cấp số liệu theo định dạng tiêu chuẩn mà Prometheus có thể hiểu được. Bản thân nguồn thu thập này cũng không thuộc về khía cạnh coding để có thể nhúng libaray, đó là lúc mà các nhà xuất khẩu Prometheus xuất hiện

Exporter là một chương trình được sử dụng với mục đích thu thập, chuyển đổi các metric không ở dạng kiểu dữ liệu chuẩn Prometheus sang chuẩn dữ liệu Prometheus. Sau đấy exporter sẽ expose web service api chứa thông tin các metrics hoặc đẩy về Prometheus.

Có các loại Exporter khác nhau thu thập số liệu cho các môi trường thời gian chạy khác nhau, như một Exporter cho JAVA sẽ cung cấp các số liệu thống kê của JVM, và một Exporter cho .NET sẽ cung cấp các chỉ số hiệu suất của hệ điều hành Windows.

Ví dụ: \
MySQL Exporter là một Prometheus Exporter được sử dụng để thu thập và tiết lộ các chỉ số (metrics) từ máy chủ MySQL. Triển khai MySQL Exporter và cấu hình Prometheus để thu thập số liệu từ Exporter này, có thể thu thập các thông tin như:

- Số lượng các truy vấn SQL được thực thi và thời gian thực thi của chúng.
- Số lượng kết nối đang hoạt động và các yếu tố tải trọng của máy chủ MySQL.
- Tổng số bản ghi đã được xử lý và số lượng bản ghi bị từ chối.
- Hiệu suất và tài nguyên sử dụng của máy chủ MySQL như bộ nhớ, CPU, và dung lượng đĩa.

Nhờ vào MySQL Exporter, bạn có thể quản lý và theo dõi hiệu suất của cơ sở dữ liệu MySQL của mình dễ dàng hơn, giúp phát hiện sự cố và tối ưu hóa hoạt động của hệ thống.
## Nhóm 2: Xử lý metrics

![I'm sad](https://github.com/ngotuananh122001/graph-ql/assets/94468291/398876ec-5ec2-48b7-b269-278fbcd06a23)


## Nhóm 3: Khai thác metrcis
