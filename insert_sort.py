#插入排序
#by zhongxin 20151028
def insert_sort(data):
    if len(data) > 1: #如果data为空或只有1项数据则直接返回
        i = 0
        j = 1
        while(i < len(data)):
            while(j < len(data)):
                if data[i] > data[j]:
                    data[i], data[j] = data[j], data[i]
                j += 1
            i += 1
    return data
####test code#####
data1 = []
data2 = [1, 3, 7, 6, 5, 4, 9]
data3 = [20]
data4 = [20, 19, 18, 17, 0, -30, -80, 33, 33]
data5 = [-5, -5, -4, -3, -2, -1, 0, 9]
data6 = [8, 3, 9, 10, 8888, 3322, 212, 2321]
print(insert_sort(data1))
print(insert_sort(data2))
print(insert_sort(data3))
print(insert_sort(data4))
print(insert_sort(data5))
print(insert_sort(data6))
